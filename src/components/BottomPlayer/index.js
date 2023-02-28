import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appBarClasses, Slider } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { useState, useEffect, useRef } from "react";
import AWS from "aws-sdk";
import dynamic from 'next/dynamic';

const ReactWaves = dynamic(() => import('@dschoon/react-waves'), {
  ssr: false,
});

const VolumeSlider = withStyles({
  root: {
    color: "#FFF",
    height: 2
  },
  thumb: {
    height: 10,
    width: 10,
    backgroundColor: "#fff",
    border: "none",
    boxShadow: "0px 0px 10px #ddd",
    marginTop: -4,
    marginLeft: -5,
    "&:focus,&:hover,&$active": {
      boxShadow: "0px 0px 10px #ddd"
    }
  },
  active: {},
  track: {
    height: 2,
    borderRadius: 4
  },
  rail: {
    height: 2,
    borderRadius: 4,
    opacity: "0.2"
  }
})(Slider);




const index = () => {
  const [playing, setPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [volume, setVolume] = useState(1);
  const [countdown, setCountdown] = useState(0);
  const [audio, setAudio] = useState(null);




  useEffect(() => {
    // AWS S3 istemci nesnesi oluşturma
    const s3 = new AWS.S3({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      region: "eu-central-1",
    });

    // S3'den müzik dosyasını almak için
    s3.getObject(
      {
        Bucket: "musicplaylist9854621316858165",
        Key: "mix/babymetal- headbanger.mp3",
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const audioBlob = new Blob([data.Body], { type: "audio/mp3" });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);
        }
      }
    );
  }, []);

  useEffect(() => {
    if (audioUrl) {
      const newAudio = new Audio(audioUrl);
      newAudio.addEventListener("loadedmetadata", () => {
        setCountdown(Math.round(newAudio.duration * 1000));
        setAudio(newAudio);
      });
    }
  }, [audioUrl]);

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };
  



  return (
    <div className="media-player-container">
      <div className="name-action">
        
        <div className="song-detail">
          <img
            src="https://d2dr664stgnqa5.cloudfront.net/jambox-artwork/artwork_1655302780946v7v7d_STYE863SQ.jpg"
            className="audio-img"
          />
          <div>
            <p className="title-1" style={{ cursor: "pointer" }}>
              Majestic Glow
            </p>
            <p className="title-2 cursor-pointer">Glower</p>
          </div>
        </div>
        

        <div className="action-btns">
          <button className="btn btn-icon">
            <i className="icon-moon  icon-back-line"></i>
          </button>
          <div
        className="play button"
        onClick={() => {
        setPlaying(!playing);
        }}
        >
        {!playing ? "▶" : "■"}
        </div>
          <button className="btn btn-icon">
            <i className="icon-moon  icon-next-line"></i>
          </button>
        </div>
      </div>


      <div id="waveform" className="wave-time">
      <div className={"container example"}>
     
      {audioUrl && (
        <ReactWaves
          audioFile={audioUrl}
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
          onPosChange={(pos) => {
            if (audio) {
              setCountdown(Math.round((audio.duration - pos) * 1000));
            }
          }}
        />
      )}
        </div>
        <div className="countdown">{countdown}</div>
      </div>
          
      <div className="vol-licence">
        <span className="span-mute-unmute">
          <i className="icon-moon icon-volume"></i>
        </span>
        
        <div className="vol-slider">
          <VolumeSlider
            id="simple-volume"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <div className="media-list">
          <div className="media-item">
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
        </div>
      </div>
    </div>
  );
};

export default index;
