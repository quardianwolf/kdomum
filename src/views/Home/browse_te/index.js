import React from 'react'
import Playlist from '@component/Serversideplaylist'
import Playlist2 from '@component/Playlist'

const index = () => {
  return (
    <>
       <div>        
         <div className='container-fluid' style={{background:"#0a0915"}}>
            <div className='align-items-center row'>
              <div className='col-md-12 col-lg-12 text-center'>
                <div className='switch-field home-switch-field'>
                  <ul className='nav nav-tabs custom-tabs' >
                    <li className='nav-item'>
                      <a className='active nav-link'>Music</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link'> SFX</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         </div>    
         <div className='tab-content'>
          <div className='tab-pane active'>
            <div className='browse-music'>
              <div className='bg-gradient'>
                <div className='container-fluid'>
                  <div className='title-search'>
                    <div className='align-items-center row'>
                      <div className='col-lg-12 col-md-12'><h3 className='title text-center browse-music-sfx'>Browse Music or Sfx</h3></div>
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
            </div>
          </div>
         </div>   
        </div>
      <Playlist />
    </>
  )
}

export default index
