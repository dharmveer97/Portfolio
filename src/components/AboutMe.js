import React from 'react';

const AboutMe = () => {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <h3 className="title is-2">About Me</h3>
        <h4 className="subtitle is-5">Jack of all trades, master of "some"</h4>
        <div className="container">
          <p>
            Web developer with more than <strong>4 years</strong> of
            well-rounded experience with a degree in the field of
            <strong>Computer Science</strong>, extensive knowledge of modern Web
            techniques and love for <strong>Coffee</strong>. Looking for an
            opportunity to work and upgrade, as well as being involved in an
            organization that believes in gaining a competitive edge and giving
            back to the community.
          </p>
        </div>
      </div>

      <div className="columns has-same-height is-gapless">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h3 className="title is-4">Profile</h3>

              <div className="content">
                <table className="table-profile">
                  <tr>
                    <th colSpan="1" />
                    <th colSpan="2" />
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>Guru's Lab</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>0123-456789</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>minion@despicable.me</td>
                  </tr>
                </table>
              </div>
              <br />
              <div className="buttons has-addons is-centered">
                <a href="#" className="button is-link">
                  Github
                </a>
                <a href="#" className="button is-link">
                  LinkedIn
                </a>
                <a href="#" className="button is-link">
                  Twitter
                </a>
                <a href="#" className="button is-link">
                  CodeTrace
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://source.unsplash.com/random/1280x960"
                  alt="Place"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content skills-content">
              <h3 className="title is-4">Skills</h3>
              <div className="content">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>JavaScript:</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="90"
                          max="100"
                        />
                      </p>
                    </div>
                  </div>
                </article>

                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Vue.js:</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="90"
                          max="100"
                        />
                      </p>
                    </div>
                  </div>
                </article>

                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Node.js:</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="75"
                          max="100"
                        />
                      </p>
                    </div>
                  </div>
                </article>

                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>HTML5/CSS3</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="95"
                          max="100"
                        />
                      </p>
                    </div>
                  </div>
                </article>

                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Databases</strong>
                        <br />
                        <progress
                          className="progress is-primary"
                          value="66"
                          max="100"
                        />
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
