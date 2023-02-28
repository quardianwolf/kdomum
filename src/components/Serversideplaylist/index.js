import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import dynamic from "next/dynamic";
import { useRef } from "react";

import _ from "lodash";

const ReactWaves = dynamic(() => import("@dschoon/react-waves"), {
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
  const data = await s3.listObjectsV2({
    Bucket: bucketName,
    Prefix: prefix,
    FetchOwner: false,
    MaxKeys: 1000,
  }).promise();

  const playlist = await Promise.all(
    data.Contents.filter((obj) => obj.Key !== prefix).map(async (obj) => {
      // headObject() methodunu kullanarak özel metadata'ları alın
      const metadata = await s3.headObject({ Bucket: bucketName, Key: obj.Key }).promise().then(res => res);

      const s3Object = await s3.getObject({
        Bucket: bucketName,
        Key: obj.Key,
      }).promise();

      return {
        name: obj.Key.replace(prefix, ""),
        url: `https://${bucketName}.s3.amazonaws.com/${obj.Key}`,
        metadata,
      };
    })
  );

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

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  console.log(playlist)


  return (
    <div className="tab-content">
      <div className="tab-pane active">
        <div className="browse-music">
          <div className="content">
            <div className="container-fluid">
              <div className="media-list">
                {playlist.map((track, index) => (
            
                  <div className="media-item" key={index}>
                    <div className="item-image">
                      <img
                        src="https://d2dr664stgnqa5.cloudfront.net/jambox-artwork/artwork_1655302780946v7v7d_STYE863SQ.jpg"
                        className="img-fluid"
                      />
                      <div class="item-play" onClick={() => togglePlay(index)}>
                        {!playing || activeTrack !== index ? (
                          <span class="icon-moon icon-play"></span>
                        ) : (
                          <span class="icon-moon icon-pause"></span>
                        )}
                      </div>
                    </div>

                    <div className="item-name cursor-pointer">
                      <a className="name" href="/">
                        {track.name}
                      </a>
                      <p className="artist cursor-pointer">artist</p>
                    </div>

                    <div className="item-new">
                      <span className="new-text">
                        <span className="text">New</span>
                      </span>
                      <button
                        aria-controls="example-collapse-text"
                        aria-expanded="false"
                        type="button"
                        className="cnt btn btn-primary"
                      >
                        <span className="text">+21</span>
                      </button>
                    </div>

                    <div className="item-detail">Test, Development</div>

                    <div className="item-microphone">
                      <span className="icon-moon icon-mic"></span>
                    </div>

                    <div className="item-time">
                      <span className="time">2:38</span>
                    </div>


                    <div className="item-wave">
                    
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

                    <div className="item-action">
                      <div className="item-e"></div>
                      <span className="d-inline-block">
                        <button type="button" className="btn btn-primary">
                          <span className="icon-moon icon-SIMILAR-TRACK font-similar"></span>
                        </button>
                      </span>
                      <span className="d-inline-block">
                        <button type="button" className="btn btn-primary">
                          <span className="icon-moon icon-download"></span>
                        </button>
                      </span>
                      <span className="d-inline-block">
                        <button type="button" className="btn btn-primary">
                          <span className="icon-moon icon-cart_icn"></span>
                        </button>
                      </span>
                      <div className="player-more dropdown">
                        <button
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="dropdown-menu-align-right"
                          type="button"
                          className="dropdown-toggle btn btn-primary"
                        >
                          <span className="icon-moon icon-more"></span>
                        </button>
                      </div>
                    </div>

                   
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
