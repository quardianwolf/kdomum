import React from "react";



const index = () => {
  return (
    <div className="promise-team">
      <div className="our-promise">
        <div className="img-position-absolute">
          <img
            className="img-object-fit img-object-top-center"
            src="https://jambox.io:8501/static/assets/our_promise.aa6ed637.webp"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title">The Promise</h3>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item-container">
                <figure>
                  <img
                    src="https://jambox.io:8501/static/assets/keepit-fresh.5de8b86b.webp"
                    className="alarm"
                  />
                  <figcaption>Keep it fresh! </figcaption>
                </figure>
                <p>
                  Music is our core offering; that's our daily mantra. We're
                  tirelessly looking for artists that inspire us and push sonic
                  norms so that it's always exciting for our users to find great
                  music and for us to dish it out.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item-container">
                <figure>
                  <img
                    src="https://jambox.io:8501/static/assets/keep-creative.548aa342.webp"
                    className="smartphone"
                  />
                  <figcaption>Keep you in your creative zone!</figcaption>
                </figure>
                <p>
                  We deliver the most accurate metadata set in the industry,
                  ensuring that when using our search engine you get exactly
                  what you're after, no filler, no false results. The faster you
                  find the music you're after, the faster you can jump back into
                  the edit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item-container">
                <figure>
                  <img
                    src="https://jambox.io:8501/static/assets/keepit-real.6ce0e7bd.webp"
                    className="loupe"
                  />
                  <figcaption>Keep it real!</figcaption>
                </figure>
                <p>
                  You'll receive great customer service, competitive pricing
                  options and flexibility that will have your back no matter
                  what the size of your budget. We built a platform that offers
                  a pricing point that can easily scale with your project needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-team d-none">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title">Meet The Team</h3>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
