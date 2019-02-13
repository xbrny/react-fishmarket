import React from "react";

const NotFound = () => (
  <section className="section has-text-centered">
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-3">
          <div className="is-size-1 has-text-danger">404</div>
          <div className="is-size-4">
            Gome, cannot find what you searched
          </div>
          <a href="/" className="is-button is-text">back</a>
        </div>
      </div>
    </div>
  </section>
);
export default NotFound;
