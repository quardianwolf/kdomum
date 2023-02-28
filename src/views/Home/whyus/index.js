import React from "react";

const index = () => {
  return (
    <div className="parallax-banner">
      <div className="container-fluid">
        <div className="align-items-center row">
          <div className="col-xl-6 col-lg-6">
            <h4 className="why-title">
              why <span>jambox?</span>
            </h4>
            <p className="para-1">
              You have a vision. We have the music to help bring it to life.
              <br /> From film composers to indie bands, classNameical orchestras,
              <br /> world, electronic, and everything in between, our
              <br />
              handpicked catalog puts the best music from today’s top
              <br /> emerging musicians right in your hands.
              <br />
              <span className="d-block mt-4">
                All for extremely comfortable pricing options.
              </span>
            </p>
            <hr />
            <p className="para-2">
              Find what feels right fast with
              <br /> intuitive filters and searchable
              <br /> playlists to help you get inspired.
            </p>
            <div className="desktop-view">
              <a
                className="btn btn-bordered-black btn-browse bold mb-4"
                href="/music"
              >
                browse music
              </a>
              <ul className="four-circle">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="pr-0 col-xl-6 col-lg-6">
            <img
              src="https://jambox.io:8501/static/assets/paralax.288b8dcb.webp"
              className="lazy img-fluid parallax-banner-img" alt="resim"
            />
            <div className="mobile-view">
              <a
                className="btn btn-bordered-black btn-browse bold mb-4"
                href="/music"
              >
                browse music
              </a>
              <ul className="four-circle">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
