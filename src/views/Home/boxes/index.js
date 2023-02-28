import React from "react";

const index = () => {
  return (
    <div className="unlimited-music-section">
      <ul className="unlimited-music-top">
        <li>
          <div className="img-position-absolute">
            <img
              className="lazy img-object-fit img-object-top-center"
              src="https://jambox.io:8501/static/assets/unlimited-1.b72da774.webp" alt="resim"
            />
          </div>
          <figure className="item-img"></figure>
          <div className="unlimited-disc">
            <h3 className="item-title">Unlimited Music &amp; Sfx</h3>
            <p>
              Meet even the biggest music and sfx needs with one of our
              subscription plans. Unlimited downloads, stems, alt mixes, and
              instrumental versions are all yours for an affordable monthly or
              yearly price.
            </p>
          </div>
        </li>
        <li>
          <div className="img-position-absolute">
            <img
              className="lazy img-object-fit img-object-top-center"
              src="https://jambox.io:8501/static/assets/unlimited-2.a8e21b84.webp" alt="resim"
            />
          </div>
          <figure className="item-img"></figure>
          <div className="unlimited-disc">
            <h3 className="item-title">Detailed Stems &amp; Alt Mixes</h3>
            <p>
              We don’t just want our music to be a good fit for your projects,
              we want it to be perfect. That’s why we create extremely detailed
              stems by separating songs’ instruments and vocals to give you
              maximum control and flexibility.
            </p>
          </div>
        </li>
        <li>
          <div className="img-position-absolute">
            <img
              className="lazy img-object-fit img-object-top-center"
              src="https://jambox.io:8501/static/assets/unlimited-3.9b2ac675.webp" alt="resim"
            />
          </div>
          <figure className="item-img"></figure>
          <div className="unlimited-disc">
            <h3 className="item-title">Surgical Search Tools</h3>
            <p>
              Our search engine was designed to connect you with the perfect
              music as quickly and easily as possible. Follow, share, and
              playlist creation tools make collaborating with your team
              effortless.
            </p>
          </div>
        </li>
      </ul>
      <ul className="unlimited-music-middle">
        <li>
          <img
            src="https://jambox.io:8501/static/assets/video-left.7fadb877.webp"
            className="lazy img-fluid video-img"
            alt="resim"
          />
        </li>
        <li>
          <div className="unlimited-music-video">
            <video
              className="img-fluid lazy"
              id=""
              autoPlay=""
              playsInline=""
              loop=""
              muted=""
              style={{opacity: "-0.201667"}}
            >
              <source
                src="https://jambox.io:8501/static/assets/final-simple.f5e0213f.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </li>
        <li>
          <img
            src="https://jambox.io:8501/static/assets/video-right.702fdf69.webp"
            className="lazy img-fluid video-img"
            alt="resim"
          />
        </li>
      </ul>
      <ul className="unlimited-music-bottom">
        <li>
          <div className="img-position-absolute">
            <img
              className="lazy img-object-fit img-object-top-center"
              src="https://jambox.io:8501/static/assets/unlimited-4.13e890a3.webp"
            />
          </div>
          <figure className="item-img"></figure>
          <div className="unlimited-disc">
            <h3 className="item-title">Supscription &amp; Single Songs</h3>
            <p>
              Whether you’re looking for an all you can eat buffet or something
              a little more à la carte, we’ve got you covered with licensing
              options for every creator’s needs.
            </p>
          </div>
        </li>
        <li>
          <div className="img-position-absolute">
            <img
              className="lazy img-object-fit img-object-top-center"
              src="https://jambox.io:8501/static/assets/unlimited-5.2014b295.webp"
            />
          </div>
          <figure className="item-img"></figure>
          <div className="unlimited-disc">
            <h3 className="item-title">World className Music</h3>
            <p>
              If hiring live orchestras, EDM producers, singer-songwriters, and
              indie rock bands to live in your guest room just isn’t in the
              cards, we have good news. Jambox puts stellar music from all of
              these and more at your fingertips.
            </p>
          </div>
        </li>
        <li>
          <div className="img-position-absolute">
            <img
              className="lazy img-object-fit img-object-top-center"
              src="https://jambox.io:8501/static/assets/unlimited-6.7786c6d7.webp"
            />
          </div>
          <figure className="item-img"></figure>
          <div className="unlimited-disc">
            <h3 className="item-title">Weekly Music Updates</h3>
            <p>
              With one of the largest A&amp;R teams in the industry, we’re proud
              to be able to keep our catalogue on the cutting edge by constantly
              adding new artists, composers, and producers.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default index;
