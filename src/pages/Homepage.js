import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Subscribe } from "../components/index.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Newsletter } from "../components";

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
                  We are a grassroots organisation of people with East and Southeast
                  identities and heritage who formed in direct response to the
                  increased racism that ESA people have experienced here in the UK
                  and worldwide. We resist and oppose racism with an intersectional
                  understanding of oppression, and we working on building a strong ESA
                  community here in the North East England.
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
                    Queer Talks
                  </h4>
                  <span>By Ella</span>
                  <span className="blog-date"></span>
                </div>
                <div className="text-center">
                  <a href="/contact" className="os-btn os-btn-2">
                    READ MORE
                  </a>
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
                    Changing the World
                  </h4>
                  <span>By Sakil</span>
                  <span className="blog-date"></span>
                </div>
                <div className="text-center">
                  <a href="/contact" className="os-btn os-btn-2">
                    READ MORE
                  </a>
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
                    Pride and Belonging
                  </h4>
                  <span>By Shahnewaz</span>
                  <span className="blog-date"></span>
                </div>
                <div className="text-center">
                  <a href="/contact" className="os-btn os-btn-2">
                    READ MORE
                  </a>
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
                  We are looking for people to join our core organising people.
                  Roles include but are not limited to: recruitment, wellbeing,
                  events, social media, content creators, artists, researches,
                  and translators.
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
                alt="a signage"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + '/assets/img/social/social--2.jpg'}
                className="img-fluid team-pic-one"
                alt="a girl holding a sign"
              />
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + '/assets/img/social/social--3.jpg'}
                className="img-fluid team-pic-one"
                alt="happy lunar new year"
              />
            </Col>
          </Row>
        </div>
      </section>
      <Newsletter />
    </div>
  );
}

export { Homepage };
