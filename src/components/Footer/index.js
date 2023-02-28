import React from "react";

const index = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="quick-links">
              <div className="logo-section">
                <img
                  src="https://jambox.io:8501/static/assets/Jambox-logo_whiteV2.2623d7b6.webp"
                  className="footer-logo"
                  alt="logo"
                />
                <ul className="footer-social">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/channel/UC_ss7dpD96hdJ1olPhAR1EA"
                    >
                      <button>
                        <span className="icon-moon icon-youtube_icn"></span>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/jambox.io/"
                    >
                      <button>
                        <span className="icon-moon font-18 icon-instagram"></span>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/Jamboxio"
                    >
                      <button>
                        <span className="icon-moon icon-twitter"></span>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/jamboxio/"
                    >
                      <button>
                        <span className="icon-moon font-18 icon-fb_icn"></span>
                      </button>
                    </a>
                  </li>
                </ul>
                <p className="copyright-text d-none d-lg-block">© 2023 Jambox</p>
              </div>
              <div className="about-us">
                <h3 className="footer-title">About Us</h3>
                <ul className="quick-ul">
                  <li>
                    <a href="/about">
                      <button className="btn-transparent">Our Calling</button>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://blog.jambox.io/"
                    >
                      <button className="btn-transparent">JamBox Blog</button>
                    </a>
                  </li>
                  <li>
                    <a href="/pricing">
                      <button className="btn-transparent">Pricing</button>
                    </a>
                  </li>
                  <li>
                    <a href="/faq?tab=4">
                      <button className="btn-transparent">FAQ</button>
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us">
                      <button className="btn-transparent">Contact</button>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://artist.jambox.io/"
                    >
                      <button className="btn-transparent">
                        Artist Submissions
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="quicklinks">
                <h3 className="footer-title">what we offer</h3>
                <ul className="quick-ul">
                  <li>
                    <div className="no-link">
                      Music &amp; Sfx For Video &amp; Film
                    </div>
                  </li>
                  <li>
                    <div className="no-link">Unlimited Subscription Plans</div>
                  </li>
                  <li>
                    <div className="no-link">Single Song Licensing</div>
                  </li>
                  <li>
                    <div className="no-link">Custom Music For Your Films</div>
                  </li>
                  <li>
                    <div className="no-link">Music For Youtubers</div>
                  </li>
                  <li>
                    <div className="no-link">Royalty Free Music</div>
                  </li>
                  <li>
                    <div className="no-link">Stems &amp; Alt Mixes</div>
                  </li>
                </ul>
              </div>
              <div className="play-list-section">
                <h3 className="footer-title">Playlists</h3>
                <ul className="quick-ul">
                  <li>
                    <button className="btn-transparent" type="button">
                      Inspiring Downtempo
                    </button>
                  </li>
                  <li>
                    <button className="btn-transparent" type="button">
                      LoFi Jams
                    </button>
                  </li>
                  <li>
                    <button className="btn-transparent" type="button">
                      Intertwined Love
                    </button>
                  </li>
                  <li>
                    <button className="btn-transparent" type="button">
                      Funky Beats
                    </button>
                  </li>
                  <li>
                    <button className="btn-transparent" type="button">
                      Power Swagger Stadium Rock
                    </button>
                  </li>
                  <li>
                    <button className="btn-transparent" type="button">
                      NeoclassNameical Underscore
                    </button>
                  </li>
                  <li>
                    <button className="btn-transparent" type="button">
                      Chillstep &amp; Glitch Hop
                    </button>
                  </li>
                </ul>
              </div>
              <div className="contact-info d-md-none">
                <ul>
                  <li>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4yNHB4ICgxNik8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjIwNy42NzE3NDQlIiB5MT0iLTcxLjc5MjE1OTYlIiB4Mj0iLTMyLjU2MDc0OSUiIHkyPSIxNDAuMTEyNzI4JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTZCQTBDIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFNDUwQjMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iRmluYWxzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjkwMDAwMDAzNiI+CiAgICAgICAgPGcgaWQ9IlByaWNpbmctcGFnZS12MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwNi4wMDAwMDAsIC05ODUuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgODQ3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ik5lZWQtaGVscCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODA0LjAwMDAwMCwgOTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkUtbWFpbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjI0cHgtKDE2KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDI0IDAgMjQgMjQgMCAyNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMiw2IEMyMiw0LjkgMjEuMSw0IDIwLDQgTDQsNCBDMi45LDQgMiw0LjkgMiw2IEwyLDE4IEMyLDE5LjEgMi45LDIwIDQsMjAgTDIwLDIwIEMyMS4xLDIwIDIyLDE5LjEgMjIsMTggTDIyLDYgWiBNMjAsNiBMMTIsMTAuOTkgTDQsNiBMMjAsNiBaIE0yMCwxOCBMNCwxOCBMNCw4IEwxMiwxMyBMMjAsOCBMMjAsMTggWiIgaWQ9IlNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" />
                    <a href="mailto:support@jambox.io">support@jambox.io</a>
                  </li>
                  <li>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4yNHB4ICgxNSk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjIwNy42NzE3NDQlIiB5MT0iLTcxLjc5MjE1OTYlIiB4Mj0iLTMyLjU2MDc0OSUiIHkyPSIxNDAuMTEyNzI4JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTZCQTBDIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFNDUwQjMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iRmluYWxzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjkwMDAwMDAzNiI+CiAgICAgICAgPGcgaWQ9IlByaWNpbmctcGFnZS12MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwNi4wMDAwMDAsIC0xMDIzLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDg0Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJOZWVkLWhlbHAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwNC4wMDAwMDAsIDk0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJTaGlmdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDgwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjI0cHgtKDE1KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDI0IDAgMjQgMjQgMCAyNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS45OSwyIEMxNy41MiwyIDIyLDYuNDggMjIsMTIgQzIyLDE3LjUyIDE3LjUyLDIyIDExLjk5LDIyIEM2LjQ3LDIyIDIsMTcuNTIgMiwxMiBDMiw2LjQ4IDYuNDcsMiAxMS45OSwyIFogTTEyLDIwIEMxNi40MiwyMCAyMCwxNi40MiAyMCwxMiBDMjAsNy41OCAxNi40Miw0IDEyLDQgQzcuNTgsNCA0LDcuNTggNCwxMiBDNCwxNi40MiA3LjU4LDIwIDEyLDIwIFogTTEyLjUsNyBMMTIuNSwxMi4yNSBMMTcsMTQuOTIgTDE2LjI1LDE2LjE1IEwxMSwxMyBMMTEsNyBMMTIuNSw3IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
                    <p>
                      Monday - Friday
                      <br /> 9:00am - 5:00pm EST
                    </p>
                  </li>
                  <li className="d-none">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4yNHB4ICgxOCk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjIwNy42NzE3NDQlIiB5MT0iLTcxLjc5MjE1OTYlIiB4Mj0iLTMyLjU2MDc0OSUiIHkyPSIxNDAuMTEyNzI4JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTZCQTBDIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFNDUwQjMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iRmluYWxzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjkwMDAwMDAzNiI+CiAgICAgICAgPGcgaWQ9IlByaWNpbmctcGFnZS12MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwNi4wMDAwMDAsIC0xMDcyLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDg0Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJOZWVkLWhlbHAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwNC4wMDAwMDAsIDk0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJTdGFydC1jaGF0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjI0cHgtKDE4KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDI0IDAgMjQgMjQgMCAyNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwyIEw0LDIgQzIuOSwyIDIsMi45IDIsNCBMMiwyMiBMNiwxOCBMMjAsMTggQzIxLjEsMTggMjIsMTcuMSAyMiwxNiBMMjIsNCBDMjIsMi45IDIxLjEsMiAyMCwyIFogTTIwLDE2IEw2LDE2IEw0LDE4IEw0LDQgTDIwLDQgTDIwLDE2IFoiIGlkPSJTaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
                    <button>Start Chat</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="contact-detail">
              <div className="contact-info d-none d-md-block">
                <ul>
                  <li>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4yNHB4ICgxNik8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjIwNy42NzE3NDQlIiB5MT0iLTcxLjc5MjE1OTYlIiB4Mj0iLTMyLjU2MDc0OSUiIHkyPSIxNDAuMTEyNzI4JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTZCQTBDIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFNDUwQjMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iRmluYWxzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjkwMDAwMDAzNiI+CiAgICAgICAgPGcgaWQ9IlByaWNpbmctcGFnZS12MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwNi4wMDAwMDAsIC05ODUuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgODQ3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ik5lZWQtaGVscCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODA0LjAwMDAwMCwgOTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkUtbWFpbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjI0cHgtKDE2KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDI0IDAgMjQgMjQgMCAyNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMiw2IEMyMiw0LjkgMjEuMSw0IDIwLDQgTDQsNCBDMi45LDQgMiw0LjkgMiw2IEwyLDE4IEMyLDE5LjEgMi45LDIwIDQsMjAgTDIwLDIwIEMyMS4xLDIwIDIyLDE5LjEgMjIsMTggTDIyLDYgWiBNMjAsNiBMMTIsMTAuOTkgTDQsNiBMMjAsNiBaIE0yMCwxOCBMNCwxOCBMNCw4IEwxMiwxMyBMMjAsOCBMMjAsMTggWiIgaWQ9IlNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" />
                    <a href="mailto:support@jambox.io">support@jambox.io</a>
                  </li>
                  <li>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4yNHB4ICgxNSk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjIwNy42NzE3NDQlIiB5MT0iLTcxLjc5MjE1OTYlIiB4Mj0iLTMyLjU2MDc0OSUiIHkyPSIxNDAuMTEyNzI4JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTZCQTBDIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFNDUwQjMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iRmluYWxzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjkwMDAwMDAzNiI+CiAgICAgICAgPGcgaWQ9IlByaWNpbmctcGFnZS12MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwNi4wMDAwMDAsIC0xMDIzLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDg0Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJOZWVkLWhlbHAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwNC4wMDAwMDAsIDk0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJTaGlmdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDgwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjI0cHgtKDE1KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDI0IDAgMjQgMjQgMCAyNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS45OSwyIEMxNy41MiwyIDIyLDYuNDggMjIsMTIgQzIyLDE3LjUyIDE3LjUyLDIyIDExLjk5LDIyIEM2LjQ3LDIyIDIsMTcuNTIgMiwxMiBDMiw2LjQ4IDYuNDcsMiAxMS45OSwyIFogTTEyLDIwIEMxNi40MiwyMCAyMCwxNi40MiAyMCwxMiBDMjAsNy41OCAxNi40Miw0IDEyLDQgQzcuNTgsNCA0LDcuNTggNCwxMiBDNCwxNi40MiA3LjU4LDIwIDEyLDIwIFogTTEyLjUsNyBMMTIuNSwxMi4yNSBMMTcsMTQuOTIgTDE2LjI1LDE2LjE1IEwxMSwxMyBMMTEsNyBMMTIuNSw3IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
                    <p>
                      Monday - Friday
                      <br /> 9:00am - 5:00pm EST
                    </p>
                  </li>
                  <li className="d-none">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4yNHB4ICgxOCk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjIwNy42NzE3NDQlIiB5MT0iLTcxLjc5MjE1OTYlIiB4Mj0iLTMyLjU2MDc0OSUiIHkyPSIxNDAuMTEyNzI4JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTZCQTBDIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFNDUwQjMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iRmluYWxzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjkwMDAwMDAzNiI+CiAgICAgICAgPGcgaWQ9IlByaWNpbmctcGFnZS12MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwNi4wMDAwMDAsIC0xMDcyLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDg0Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJOZWVkLWhlbHAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwNC4wMDAwMDAsIDk0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJTdGFydC1jaGF0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjI0cHgtKDE4KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDI0IDAgMjQgMjQgMCAyNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwyIEw0LDIgQzIuOSwyIDIsMi45IDIsNCBMMiwyMiBMNiwxOCBMMjAsMTggQzIxLjEsMTggMjIsMTcuMSAyMiwxNiBMMjIsNCBDMjIsMi45IDIxLjEsMiAyMCwyIFogTTIwLDE2IEw2LDE2IEw0LDE4IEw0LDQgTDIwLDQgTDIwLDE2IFoiIGlkPSJTaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
                    <button>Start Chat</button>
                  </li>
                </ul>
              </div>
              <div className="newsletter-info">
                <div className="free-trial-search">
                  <div className="search-box">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value=""
                    />
                    <button className="btn-search">SUBSCRIBE</button>
                  </div>
                  <span className="giveaways">
                    Sign up to receive Jambox updates, tips &amp; giveaways
                  </span>
                </div>
              </div>
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="/license-terms">OUR LICENSES</a>
                  </li>
                  <li>
                    <a href="/terms-conditions/2">TERMS &amp; CONDITIONS</a>
                  </li>
                  <li>
                    <a href="/cookie-policy">PRIVACY &amp; COOKIES</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="copyright-text d-block d-lg-none">© 2023 Jambox</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
