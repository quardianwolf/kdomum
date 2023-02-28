import React from "react";

const index = () => {
  return (
    <div className="free-trial">
      <div className="img-position-absolute">
        <img
          className="lazy img-object-fit img-object-top-center"
          src="https://jambox.io:8501/static/assets/free-trial-bg.5ee88668.webp" alt="resim"
        />
      </div>
      <div className="position-relative container">
        <h3 className="create-new-account-title">
          Never settle for anything less than impactful music<span>.</span>
          <br />
          We connect with artists that share our vision and help them thrive
        </h3>
        <div className="free-trial-search">
          <div className="search-box">
            <input
              type="email"
              placeholder="Email address"
              name="email"
            
            />
            <button className="btn-search">SUBSCRIBE</button>
          </div>
          <span className="giveaways">
            Sign up to receive Jambox updates, tips &amp; giveaways
          </span>
        </div>
        <a className="btn btn-orange bold" href="/register">
          JOIN FOR FREE
        </a>
        <p className="join-today">
          WITH A FREE ACCOUNT YOU GET TO CREATE PLAYLISTS, FOLLOW YOUR FAVORITE
          ARTISTS AND SONGS,
          <br />
          DOWNLOAD PREVIEW TRACKS AND SHARE WITH YOUR CO-WORKERS AND FRIENDS
        </p>
      </div>
    </div>
  );
};

export default index;
