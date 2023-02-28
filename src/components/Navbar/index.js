import React from "react";

const index = () => {
  return (
    <div className="header black-theme">
      <div className="logo">
        <div className="logo-container">
          <div>
            <div className="menu-dots">
              <div className="menu-toggle web ">
                <div className="toggle-box">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
              <div className="left-navigation ">
                <div className="top-nav">
                  <ul className="top-nav-items">
                    <li className="d-block d-md-none">
                      <a className="btn" href="/login">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="btn big-text" href="/music">
                        Browse
                      </a>
                    </li>
                    <li>
                      <a className="btn" href="/sfx">
                        Sfx
                      </a>
                    </li>
                    <li>
                      <a className="btn" href="/playlist">
                        Playlists
                      </a>
                    </li>
                    <li>
                      <a className="btn" href="/artist">
                        Artists
                      </a>
                    </li>
                    <li>
                      <a className="btn" href="/pricing">
                        Pricing
                      </a>
                    </li>
                  </ul>
                  <hr className="hr" />
                </div>
                <div className="content-nav">
                  <ul className="content-nav-items">
                    <li>
                      <a className="btn big-text" href="/about">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="btn" href="/faq">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://artist.jambox.io/"
                        className="btn"
                      >
                        Become an Artist
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn"
                        href="https://blog.jambox.io/"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                  <hr className="hr" />
                </div>
                <div className="content-nav">
                  <ul className="content-nav-items">
                    <li>
                      <a href="/about">
                        <button className="btn big-text">Blog</button>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://blog.jambox.io/"
                      >
                        <button className="btn">Jambox Blog</button>
                      </a>
                    </li>
                    <li>
                      <a className="btn" href="/blog">
                        Knowledge Base
                      </a>
                    </li>
                  </ul>
                  <hr className="hr" />
                </div>
                <div className="content-nav">
                  <ul className="content-nav-items">
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://artist.jambox.io/login"
                        className="btn small-text"
                      >
                        Artist Login
                      </a>
                    </li>
                    <li>
                      <a className="btn small-text" href="/contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <hr className="hr" />
                </div>
                <p className="live-chat-text">
                  <button>Live Chat</button> I{" "}
                  <a href="mailto:support@jambox.io">Email us</a>
                </p>
                <div className="social-nav">
                  <ul className="social-nav-items">
                    <li>
                      <span className="icon-moon icon-Youtube"></span>
                    </li>
                    <li>
                      <span className="icon-moon icon-Instagram"></span>
                    </li>
                    <li>
                      <span className="icon-moon icon-Twitter"></span>
                    </li>
                    <li>
                      <span className="icon-moon icon-Facebook"></span>
                    </li>
                  </ul>
                </div>
                <div className="py-4 text-center">
                  <img src="https://jambox.io:8501/static/assets/left-X.cbd2ce5b.webp" />
                </div>
              </div>
            </div>
          </div>
          <a href="/">
            <img
              src="https://jambox.io:8501/static/assets/Jambox-logo_whiteV2.2623d7b6.webp"
              alt="logo"
              className="header-logo"
              height="30"
            />
          </a>
        </div>
        <div className="navigation">
          <ul>
            <li className="padding-zero">
              <a href="/music">
                <button className="btn-transparent btn-search">
                  <span className="icon-moon icon-search"></span>
                </button>
              </a>
            </li>
            <li className="sub-menu-li pl-4">
              <a href="/about">
                <button className="btn-transparent">Browse</button>
              </a>
              <ul className="sub-menu browse-sub-menu">
                <li>
                  <a href="/music">MUSIC</a>
                </li>
                <li>
                  <a href="/sfx">SFX</a>
                </li>
                <li>
                  <a href="/playlist">MUSIC PLAYLISTS</a>
                </li>
                <li>
                  <a href="/sfxplaylist">SFX PLAYLISTS</a>
                </li>
                <li>
                  <a href="/artist">ARTISTS</a>
                </li>
              </ul>
            </li>
            <li className="sub-menu-li">
              <a href="/about">
                <button className="btn-transparent active">About</button>
              </a>
              <ul className="sub-menu about-sub-menu">
                <li>
                  <a href="/about">ABOUT US</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
                <li>
                  <a href="/contact">CONTACT</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/pricing">
                <button className="btn-transparent">Pricing</button>
              </a>
            </li>
            <li className="sub-menu-li">
              <a href="/about">
                <button className="btn-transparent">Blog</button>
              </a>
              <ul className="sub-menu about-sub-menu">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blog.jambox.io/"
                  >
                    <button className="btn-transparent">JAMBOX BLOG</button>
                  </a>
                </li>
                <li>
                  <a href="/blog">KNOWLEDGE BASE</a>
                </li>
              </ul>
            </li>
            <li className="sub-menu-li">
              <a href="/about">
                <button className="btn-transparent">Artist Portal</button>
              </a>
              <ul className="sub-menu artist-portal-sub-menu">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://artist.jambox.io/"
                  >
                    BECOME AN ARTIST
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/faq?tab=4">
                    ARTIST FAQs
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://artist.jambox.io/login"
                  >
                    ARTIST LOGIN
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="signin-pricing">
        <ul>
          <li className="d-none d-md-inline-block">
            <a className="btn-signin" href="/login">
              Login
            </a>
          </li>
          <li>
            <a href="/register">
              <button className="btn-getstarted">Free Sign-Up</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
