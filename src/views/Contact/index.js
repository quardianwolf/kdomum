import React from 'react'

const ContactPage = () => {
  return (
    <div className="contact-us-main bg-normal mt-80">
      <div className="img-position-absolute">
        <img className="img-object-fit img-object-top-center" src="https://jambox.io:8501/static/assets/contact-bg.d89fa95c.webp" />
      </div>
      <div className="contact-logo">
        <img src="https://jambox.io:8501/static/assets/x-logo.64d604be.webp" />
      </div>
      <div className="contact-detail">
        <h3 className="title">contact us</h3>
        <p className="sub-title">While we fully support telepathy, there are easier ways for us to get in touch and answer your questions.</p>
        <div className="contact-tab">
          <div className="row">
            <div className="col-sm-12">
              <div className="flex nav nav-pills" role="tablist">
                <div className="nav-item">
                  <a href="#" role="tab" data-rb-event-key="general" id="uncontrolled-tab-example-tab-general" aria-controls="uncontrolled-tab-example-tabpane-general" aria-selected="false" className="nav-link">
                    <div className="img-position-absolute">
                      <img className="img-object-fit img-object-top-center" src="https://jambox.io:8501/static/assets/general-inquiries.faa7ae52.webp" />
                    </div>
                    <span className="bg-img-title">General Inquiries</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="#" role="tab" data-rb-event-key="artist" id="uncontrolled-tab-example-tab-artist" aria-controls="uncontrolled-tab-example-tabpane-artist" aria-selected="false" className="nav-link"><
                    div className="img-position-absolute">
                    <img className="img-object-fit img-object-top-center" src="https://jambox.io:8501/static/assets/artist-submissions.607d33e3.webp" />
                  </div>
                    <span className="bg-img-title">Artist Submissions</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="#" role="tab" data-rb-event-key="customQuote" id="uncontrolled-tab-example-tab-customQuote" aria-controls="uncontrolled-tab-example-tabpane-customQuote" aria-selected="false" className="nav-link">
                    <div className="img-position-absolute">
                      <img className="img-object-fit img-object-top-center" src="https://jambox.io:8501/static/assets/custom-quote.a82e87cf.webp" />
                    </div>
                    <span className="bg-img-title">Custom Quote</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="#" role="tab" data-rb-event-key="music" id="uncontrolled-tab-example-tab-music" aria-controls="uncontrolled-tab-example-tabpane-music" aria-selected="false" className="nav-link">
                    <div className="img-position-absolute">
                      <img className="img-object-fit img-object-top-center" src="https://jambox.io:8501/static/assets/music-search.31ac3dd9.webp" />
                    </div>
                    <span className="bg-img-title">Music Search</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="tab-content">
                <div id="uncontrolled-tab-example-tabpane-general" aria-labelledby="uncontrolled-tab-example-tab-general" role="tabpanel" aria-hidden="true" className="fade tab-pane">
                  <div className="contact-tab-content" id="generalRef">
                    <ul className="four-circle">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <h3 className="ctc-title">General Inquiries</h3>
                    <p className="ctc-subtitle">We love to help out with whatever we can. Have questions about your <br /> order, account, password or anything else? Drop your details below and <br /> we’ll get back to you soon.</p>
                    <div className="contact-form">
                      <div className="row">
                        <div className="col-md-12 col-lg-4">
                          <div className="form-group">
                            <label className="custom-label">First Name *</label>
                            <input type="text" className="form-control" name="firstname" />
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-group">
                            <label className="custom-label">Last Name *</label>
                            <input type="text" className="form-control" name="lastname" />
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-group">
                            <label className="custom-label">Email *</label>
                            <input autocomplete="off" className="form-control" type="email" name="email" />
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <label className="custom-label">Message *</label>
                            <textarea className="form-control h-250px" name="message" rows="4"></textarea>
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}></div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <label className="fancy-checkbox">
                              <input type="checkbox" className="form-control" name="privacyAgreement" />
                              <span>
                                <i></i>I consent to having Jambox store and process my submitted information for the sole purpose of responding or <br />
                                handling this inquiry.</span>
                            </label>
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="text-center">
                            <button type="submit" className="btn btn-bordered-white">Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="uncontrolled-tab-example-tabpane-artist" aria-labelledby="uncontrolled-tab-example-tab-artist" role="tabpanel" aria-hidden="true" className="fade tab-pane">
                </div>
                <div id="uncontrolled-tab-example-tabpane-customQuote" aria-labelledby="uncontrolled-tab-example-tab-customQuote" role="tabpanel" aria-hidden="true" className="fade tab-pane">
                </div>
                <div id="uncontrolled-tab-example-tabpane-music" aria-labelledby="uncontrolled-tab-example-tab-music" role="tabpanel" aria-hidden="true" className="fade tab-pane">
                  <div className="contact-tab-content" id="musicRef">
                    <ul className="four-circle">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <h3 className="ctc-title">Need our help finding music?</h3>
                    <p className="ctc-subtitle">We’d love to help you find the perfect music for your next project. Use <br /> the free Jambox music recommendation service and let us save you <br/> time and get you to your final cut.</p>
                    <div className="contact-form">
                      <div className="row">
                        <div className="col-md-12 col-lg-4">
                          <div className="form-group">
                            <label className="custom-label">First Name *</label>
                            <input type="text" className="form-control" name="firstname" />
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}></div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-group">
                            <label className="custom-label">Last Name *</label>
                            <input type="text" className="form-control" name="lastname" />
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}></div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-group">
                            <label className="custom-label">Email *</label>
                            <input autocomplete="off" className="form-control" type="email" name="email" />
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}></div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <label className="custom-label">Describe the music you’re looking for (genre, mood, feel, tempo, instrumentation etc.) *</label>
                            <textarea className="form-control" name="musicType" rows="4"></textarea>
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}></div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <label className="custom-label">Describe the target audience and subject matter of your production (e.g. car commercial for an urban audience 25-35.) *</label>
                            <textarea className="form-control" name="targetAudience" rows="4"></textarea>
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}></div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <label className="custom-label">List a url of a reference track/song if you have one (Optional)</label>
                            <input type="text" className="form-control" name="refUrl" />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group">
                            <label className="fancy-checkbox">
                              <input type="checkbox" className="form-control" name="privacyAgreement" />
                              <span>
                                <i></i>I consent to having Jambox store and process my submitted information for the sole purpose of responding or <br />
                                handling this inquiry.</span>
                            </label>
                            <div style={{color: "rgb(248, 108, 107)", fontSize: "14px"}}></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="text-center">
                            <button type="submit" className="btn btn-bordered-white">Submit</button>
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
  )
}

export default ContactPage