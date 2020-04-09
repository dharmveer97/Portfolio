import React from 'react';

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2">Portfolio</h3>
          <h4 className="subtitle is-5">My latest works</h4>
        </div>
        <br />
        <div className="container portfolio-container">
          <div className="columns">
            <div className="column is-4">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">
                    <span>
                      Admin <small>(Light)</small>
                    </span>
                    <span className="is-pulled-right">
                      <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                        <span className="tag is-default">v0.7.2</span>
                      </a>
                      <span className="tag is-default">Desktop</span>
                      <span className="tag is-danger">WIP</span>
                    </span>
                  </p>
                </header>
                <div className="card-content">
                  <figure className="image">
                    <img
                      src="../images/admin.png"
                      alt="Admin template screenshot"
                    />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a href="templates/admin.html" className="card-footer-item">
                    Preview
                  </a>
                  <a
                    href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html"
                    className="card-footer-item"
                  >
                    Source Code
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
