import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Playlist from '@component/Serversideplaylist'


const genre = [
    {
      id: 1,
      name: "genre",
      child: [
        {
          id: 1,
          name: "pop",
          image: "../../kategoriresimleri/sfx/crowds.jpg",
          link: "sfx/pop",
        },
        {
          id: 2,
          name: "rock",
          image: "../../kategoriresimleri/sfx/explo.jpg",
          link: "sfx/rock",
        },
        {
          id: 3,
          name: "hip-hop",
          image: "../../kategoriresimleri/sfx/footstep.jpg",
          link: "sfx/hip-hop",
        },
        {
          id: 4,
          name: "classical",
          image: "../../kategoriresimleri/sfx/gaming.jpg",
          link: "sfx/classical",
        },
        {
          id: 5,
          name: "electronic",
          image: "../../kategoriresimleri/sfx/halloween.jpg",
          link: "sfx/electronic",
        },
        {
          id: 6,
          name: "epic",
          image: "../../kategoriresimleri/sfx/sport.jpg",
          link: "sfx/epic",
        },
        {
          id: 7,
          name: "underscore",
          image: "../../kategoriresimleri/sfx/street.jpg",
          link: "sfx/underscore",
        },
        {
          id: 8,
          name: "vocal",
          image: "../../kategoriresimleri/sfx/transport.jpg",
          link: "sfx/vocal",
        },
        {
          id: 9,
          name: "worldmusic",
          image: "../../kategoriresimleri/sfx/water.jpg",
          link: "sfx/worldmusic",
        },

        
      ],
    },
  ];
  

const Sfx = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      };

  return (
    <div className="browse-music sfx-playlist-music pt-80">
      <div
        class="browse-banner"
        style={{
          background: "url(sfxbanner.webp)",
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
      >
        <img class="lazy browse-light-img" src="sfxlight.webp" alt="aaa" />
        <h1>discover sfx &amp; cinematic sound design</h1>
        <p>search through playlists or type in search keywords</p>
      </div>
      <div className="browse-content-area">
        <div className="browse-title-container"></div>
        <div className="genre-mood-category">
          <h1
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "30px",
              marginTop: "80px",
            }}
          >
            SFX Playlist Category
          </h1>

          {genre.map((item, index) => (
            <div className="slider-wrapper" style={{ width: "100%" }} key={index}>
              <Slider {...settings}>
                {item.child.map((item, index) => (
                  <div key={index}>
                    <img src={item.image} className="slider-img" />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>

      <div className='searchandpl'>
        <div className='browse-music browse-page-music'>
        {/*search bar*/}
        <div className='bg-gradient' style={{background: "transparent !important"}}>
                <div className='container-fluid'>
                  <div className='title-search'>
                    <div className='align-items-center row'>
                      <div className='col-lg-12 col-md-12'>
                        <div className='search-box'>
                          <div className='search-tags-input'>
                            <div className="tag-input">
                              <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" style={{position:"static",flex:"1"}}>
                                <input type="text" value="" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" placeholder="Keyword Search: Type in things like Surf Rock, Magical, Quentin Tarantino..."/>
                                <div className="search-dropdown" id="react-autowhatever-1" role="listbox" style={{display:"none"}}>
                                  <div>
                                    <ul className="parent-ul" id="divScroll">
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='mobile-filter-dropdown'>
                            <p className='filter-title'>Filter by:</p>
                            <div className='dropdown'>
                            <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" className="dropdown-toggle btn btn-success">All</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="keyword-filter">
                      <nav class="mobile-dropdown-close nav nav-tabs" role="tablist">
                        <a href="#" role="tab" data-rb-event-key="0" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Vocals</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="1" aria-selected="false" class="nav-item nav-link">
                            <div class="cat-item">QuickSearch</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="2" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Genre</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="3" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Mood</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="4" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Song Build</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="5" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Country</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="6" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Instruments</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="7" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">BPM</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="8" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Key</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="9" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Length</div>
                        </a>
                        <a href="#" role="tab" data-rb-event-key="10" aria-selected="false" class="nav-item nav-link">
                          <div class="cat-item">Submixes</div>
                        </a>
                      </nav>
                      <div class="tab-content">
                        <div role="tabpanel" aria-hidden="true" class="fade tab-pane">
                          <div class="icon-btn-filter vocals">
                            <div style={{position: "relative", overflow: "hidden", width: "100%", height: "auto", minHeight: "100%", maxHeight: "65px"}}>
                              <div style={{position: "relative", overflow: "scroll", marginRight: "-17px", marginBottom: "-17px", minHeight: "calc(100% + 17px); max-height: calc(82px)"}}>
                              <div class="item-container">
                              <div class="item ">
                              <input type="checkbox" id="0-0" class="check_none"/>
                              <label class="check_lbl red-gradient" for="0-0">
                              <img alt="" src="https://d2dr664stgnqa5.cloudfront.net/jambox-images/1588341616935_Background Vocals.png" class="lazy img-fluid"/>
                              <span class="text">Background Vocals Oos &amp; Ahhs</span>
                              </label>
                              <div class="multi-selection"></div>
                              </div>
                              <div class="item ">
                              <input type="checkbox" id="0-1" class="check_none"/>
                              <label class="check_lbl orange-gradient" for="0-1">
                              <img alt="" src="https://d2dr664stgnqa5.cloudfront.net/jambox-images/1588341349999_Choir.png" class="lazy img-fluid"/>
                              <span class="text">Choir</span>
                              </label>
                              <div class="multi-selection">
                              </div>
                              </div>
                              <div class="item ">
                              <input type="checkbox" id="0-2" class="check_none"/>
                              <label class="check_lbl yellow-gradient" for="0-2">
                              <img alt="" src="https://d2dr664stgnqa5.cloudfront.net/jambox-images/1588340819269_Female Vocals.png" class="lazy img-fluid"/>
                              <span class="text">Female Vocals</span>
                              </label>
                              <div class="multi-selection"></div>
                              </div>
                              <div class="item">
                                <input type="radio" class="radio_none" name="submixes" id="radio_110" value="true"/>
                                <label class="radio_lbl red-gradient" for="radio_110">
                                <span class="icon-moon icon-like"></span>
                                <span class="text">Yes</span>
                                </label>
                                </div>
                                <div class="item">
                                <input type="radio" class="radio_none" name="submixes" id="radio_210" value="false"/>
                                  <label class="radio_lbl red-gradient" for="radio_210"><span class="icon-moon icon-dislike">
                                  </span>
                                  <span class="text">No</span>
                                  </label>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                  </div>
                </div>
        </div>
        {/*search bar*/}
        <Playlist />

        </div>
     </div>
    </div>
  );
};

export default Sfx;
