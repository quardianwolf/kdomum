import React from "react";

const index = () => {
  return (
    <div className="have-question">
      <div className="container">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="title">Still have a question?</h4>
          <p className="sub-title">
            If you can't find an answer to your question in our FAQs just get in
            touch.
            <br /> We'd love to help!
          </p>
          <div className="question-cards">
            <div className="card-item">
              <img src="quest.svg" alt="Chat" />
              <p className="heading">Live chat</p>
              <span className="available-time">Available 9-5pm EST</span>
            </div>
            <div className="card-item">
              <img src="zarf.svg" alt="Email" />
              <p className="heading">Send us an email</p>
              <a href="mailto:support@jambox.io">support@jambox.io</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
