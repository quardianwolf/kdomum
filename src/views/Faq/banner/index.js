import React from "react";

const index = () => {
  return (
    <div className="banner">
      <div className="img-position-absolute">
        <img
          className="img-object-fit img-object-top-center"
          src="faqbanner.webp"
        />
      </div>
      <div className="position-relative">
        <h3 className="title">Hello, how can we help?</h3>
        <p className="desc">
          search through our FAQ's and find the answers you're looking for
        </p>
        <div className="container">
          <form>
            <div className="question-search">
              <input
                type="text"
                name="search"
                placeholder="Search for question.."
              />
              <button type="submit">SEARCH</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
