import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Map } from "../components/index.js";

/**
 * Individual event page that shows info about the event
 *
 */

function LunarNewYear() {
  return (
    <div>
      <section className="slider__area p-relative">
        <div className="slider-active">
          <div className="single-slider slider__height d-flex align-items-center homepageBg">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                  <div className="slider__content">
                    <h2>OUR COMMUNITY</h2>
                    <h1>LUNAR NEW YEAR 2023</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="slider__area event-bg-colour">
        <div className="container events-container">
          <Row className="event-row-1">
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/events/event--1.jpg"}
                className="img-fluid team-pic-one"
                alt="china town"
              />
            </Col>
            <Col>
              <div className="event-content text-center">
                <h2 className="event-details-title">EVENT DETAILS</h2>
                <div className="text-left event-details-text-container">
                    <p className="event-details-text">DATE:</p>
                    <p className="event-details-text">VENUE:</p>
                    <p className="event-details-text">PRICE:</p>
                    <p className="event-details-text">STARTS:</p>
                    <p className="event-details-text">FINISHES:</p>
                    <p className="event-details-text">AGE:</p>
                  <a href="/contact" className="os-btn purchase-btn">
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="event-row-2">
            <Col>
              <div className="event-content text-left">
                <h2 className="event-details-title">EVENT INFORMATION</h2>
                <div className="text-left event-info-text-container">
                    <h4 className="event-info-text">MAP</h4>
                    <Map />
                </div>
              </div>
            </Col>
          </Row>


        
        </div>
      </section>


      <section className="slider__area p-relative subscribe-bg-colour-event">
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

export { LunarNewYear };
