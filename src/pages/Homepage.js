import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * Home page displays the main homepage 
 *
 */

function Homepage() {
  return (
    <div>
      <section className="slider__area p-relative">
        <div className="slider-active">
          <div className="single-slider slider__height d-flex align-items-center homepageBg">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                  <div className="slider__content">
                    <h2>WELCOME TO</h2>
                    <h1>ESA.NE</h1>
                    <p>East and Southeast Asians North East</p>
                    <a href="/events" className="os-btn os-btn-2">
                      View Events
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider__area intro-bg-colour">
        <div className="container intro-container">
          <div className="row">
            <div className="col-12">
              <div className="intro__content">
                <h3 className="text-center intro-title">WHO ARE WE</h3>
                <p className="text-center intro-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="col text-center">
              <img
                src={process.env.PUBLIC_URL + '/assets/img/team/team-img-1.jpg'}
                className="img-fluid team-pic-one"
                alt="a woman"
                width="50%"
              />
              <p className="team-name">Leah - Co-Founder</p>
            </div>
            <div className="col text-center">
              <img
                src={process.env.PUBLIC_URL + '/assets/img/team/team-img-2.jpg'}
                className="img-fluid team-pic-two"
                alt="a woman"
                width="50%"
              />
              <p className="team-name">Ella - Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="slider__area blog-bg-colour">
        <div className="container blog-container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center blog-title">Our Blog Posts</h3>
            </div>
            <Row>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + '/assets/img/blog/blog-homepage-1.jpg'}
                  className="img-fluid team-pic-one"
                  alt="a woman"
                />
                <div className="blog-content text-center">
                  <h4 className="blog-author-name">
                    Anteposuerit litterarum formas
                  </h4>
                  <span>By Shahnewaz Sakil</span>
                  <span> - September 14, 2017</span>
                </div>
              </Col>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + '/assets/img/blog/blog-homepage-2.jpg'}
                  className="img-fluid team-pic-one"
                  alt="a woman"
                />
                <div className="blog-content text-center">
                  <h4 className="blog-author-name">
                    Anteposuerit litterarum formas
                  </h4>
                  <span>By Shahnewaz Sakil</span>
                  <span> - September 14, 2017</span>
                </div>
              </Col>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + '/assets/img/blog/blog-homepage-3.jpg'}
                  className="img-fluid team-pic-one"
                  alt="a woman"
                />
                <div className="blog-content text-center">
                  <h4 className="blog-author-name">
                    Anteposuerit litterarum formas
                  </h4>
                  <span>By Shahnewaz Sakil</span>
                  <span> - September 14, 2017</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="slider__area join-us-bg-colour">
        <div className="container join-us-container">
          <div className="row">
            <div className="col-12">
              <div className="join-us__content">
                <h3 className="text-center join-us-title">
                  JOIN OUR VOLUNTEER TEAM
                </h3>
                <p className="text-center join-us-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="text-center">
                  <a href="/contact" className="os-btn secondary-btn">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider__area social-bg-colour">
        <div className="container blog-container">
          <Row>
            <Col>
              <img
                src={process.env.PUBLIC_URL + '/assets/img/social/social--1.jpg'}
                className="img-fluid team-pic-one"
                alt="a woman"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + '/assets/img/social/social--2.jpg'}
                className="img-fluid team-pic-one"
                alt="a woman"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + '/assets/img/social/social--3.jpg'}
                className="img-fluid team-pic-one"
                alt="a woman"
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="slider__area p-relative subscribe-bg-colour">
        <div className="container join-us-container">
          <div className="row">
            <div className="col-12">
              <div className="join-us__content">
                <h3 className="text-center subscribe-title">
                  STAY IN THE KNOW
                </h3>
                <p className="text-center subscribe-text">
                  Subscribe to our mailing list to receive the latest news
                  within the community.
                </p>
                <div className="text-center join-us-btn">
                  <a href="/contact" className="os-btn secondary-btn">
                    SUBSCRIBE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Homepage };
