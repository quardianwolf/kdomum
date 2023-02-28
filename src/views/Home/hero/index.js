import React from "react";


const index = () => {
  return (
    <div>
      <div className="banner style-2 home-banner-studio home-banner-studio">
        <div className="slider-vid">
          <div className="home-banner-img d-none d-sm-block">

            
            <img
              className="lazy img-object-fit img-object-top-right"
              src='homestudio.webp' alt="home studio"
            />
          </div>
          <div className="home-banner-img home-banner-img d-sm-block d-md-none">
            <img
              className="lazy img-object-fit img-object-top-center"
              src="studio-responsive.webp"
            />
          </div>
          <div className="banner-bg banner-bg-responsive mobile-show"></div>
          <div className="d-flex flex-column h-100 justify-content-center banner-content container-fluid">
            <div className="banner-content-text">
              <div className="banner-content-title">FIND IT ON JAMBOX</div>
              <div className="banner-content-disc">
                CONNECTING <br />
                FILMMAKERS with <br />
                RIDICULOUSLY GOOD <br />
                MUSIC &amp; SFX
              </div>
            </div>
            <div className="banner-button-link">
              <div className="banner-button-link-left">
                <div className="banner-browse-button">
                  <a className="btn btn-music" href="/music">
                    BROWSE MUSIC
                  </a>
                  <a className="btn btn-sfx" href="/sfx">
                    BROWSE SFX
                  </a>
                </div>
                <a className="free-trial-link" href="/register">
                  start your free trial
                </a>
              </div>
              <div className="banner-button-link-right">
                <ul className="right-link">
                  <li>
                    <a href="/playlist">playlists</a>
                  </li>
                  <li>
                    <a href="/music">moods</a>
                  </li>
                  <li>
                    <a href="/music">genres</a>
                  </li>
                  <li>
                    <a href="/artist">artists</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="trusted-by">
              <ul className="trusted-logo">
                <li>
                  <img
                    className="lazy"
                    src="netflix.webp"
                  />
                </li>
                <li>
                  <img
                    className="lazy"
                    src="heineken.webp"
                  />
                </li>
                <li>
                  <img
                    className="lazy"
                    src="hbo.webp"
                  />
                </li>
                <li>
                  <img
                    className="lazy"
                    src="disney.webp"
                  />
                </li>
                <li>
                  <img
                    className="lazy"
                    src="activision.webp"
                  />
                </li>
                <li>
                  <img
                    className="lazy"
                    src="apple.webp"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
