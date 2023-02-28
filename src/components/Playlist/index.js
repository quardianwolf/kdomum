import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import dynamic from 'next/dynamic';
import { useRef } from "react";

const ReactWaves = dynamic(() => import('@dschoon/react-waves'), {
  ssr: false,
});


const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: "eu-central-1",
});
const bucketName = "musicplaylist9854621316858165";
const prefix = "mix/";

const getPlaylist = async () => {
  const data = await s3.listObjects({ Bucket: bucketName, Prefix: prefix }).promise();
  const playlist = data.Contents.filter((obj) => obj.Key !== prefix).map((obj) => ({
    name: obj.Key.replace(prefix, ""),
    url: `https://${bucketName}.s3.amazonaws.com/${obj.Key}`,
  }));
  
  return playlist;
};


const MyComponent = () => {
  const [playlist, setPlaylist] = useState([]);
  const [audioInstances, setAudioInstances] = useState([]);
  const [activeTrack, setActiveTrack] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  

  useEffect(() => {
    getPlaylist().then((playlist) => {
      setPlaylist(playlist);
      const instances = {};
      playlist.forEach((track) => {
        instances[track.url] = new Audio();
      });
      setAudioInstances(instances);
    });
  }, []);

  const playTrack = (index) => {
    const instances = { ...audioInstances };
    const track = playlist[index];
    let instance = instances[track.url];
  
    if (!instance) {
      instance = new Audio(track.url);
      instances[track.url] = instance;
    }
  
    instance.volume = volume;
    instance.play();
    setActiveTrack(index);
    setAudioInstances(instances);
    setPlaying(true);
  };
  
  
  const stopTrack = (index) => {
    const instances = { ...audioInstances };
    const track = playlist[index];
    const instance = instances[track.url];
    instance.pause();
    instance.currentTime = 0;
    delete instances[track.url];
    setAudioInstances(instances);
    setPlaying(false);
  };

  const playerRef = useRef();

useEffect(() => {
  if (playerRef.current) {
    const player = playerRef.current;
    const audioElement = player.querySelector("audio");
    if (audioElement) {
      const track = playlist[activeTrack];
      audioElement.src = track.url;
      if (playing) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }
}, [activeTrack, playing]);
  
  
  const togglePlay = (index) => {
    if (playing && activeTrack === index) {
      stopTrack(index);
    } else {
      playTrack(index);
    }
  };

  return (
    <div className="test_alani">
      {playlist.map((track, index) => (
        <div key={index}>
          <div className="play button" onClick={() => togglePlay(index)}>
            {!playing || activeTrack !== index ? "▶" : "■"}
          </div>
          <p>{track.name}</p>
          {activeTrack === index && (
            <ReactWaves
              audioFile={track.url}
              className={"react-waves"}
              options={{
                barHeight: 1,
                cursorWidth: 1,
                height: 35,
                hideScrollbar: true,
                progressColor: "#EC407A",
                responsive: true,
                waveColor: "#D1D6DA",
              }}
              volume={volume}
              zoom={1}
              playing={playing}
            />
          )}
        </div>
      ))}
    </div>
  );
};



export default MyComponent;
