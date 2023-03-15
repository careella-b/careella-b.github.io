import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * Events page displays all events
 *
 */

function EventsPage() {
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
                    <h1>WHAT'S ON</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider__area events-bg-colour">
        <div className="container events-container">
          <Row className="events-row-1">
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/events/event--1.jpg"}
                className="img-fluid team-pic-one"
                alt="china town"
              />
              <div className="event-content text-center">
                <h4 className="event-name">Lunar New Year - 2023</h4>
                <div className="text-center">
                  <a href='/events/lunar-new-year-2023' className="os-btn event-btn">
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/events/event--2.jpg"}
                className="img-fluid team-pic-one"
                alt="karaoke"
              />
              <div className="event-content text-center">
                <h4 className="event-name">Red Dinner - Food and Karaoke</h4>
                <div className="text-center">
                  <a href="/contact" className="os-btn event-btn">
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/events/event--3.jpg"}
                className="img-fluid team-pic-one"
                alt="chilli padi logo"
              />
              <div className="event-content text-center">
                <h4 className="event-name">November ESEAeats at Chilli Padi</h4>
                <div className="text-center">
                  <a href="/contact" className="os-btn event-btn">
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="events-row-2">
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/events/event--4.jpg"}
                className="img-fluid team-pic-one"
                alt="jj's cafe logo"
              />
              <div className="event-content text-center">
                <h4 className="event-name">End of 2022 Celebration</h4>
                <div className="text-center">
                  <a href="/contact" className="os-btn event-btn">
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/events/event--5.jpg"}
                className="img-fluid team-pic-one"
                alt="people at a picnic"
              />
              <div className="event-content text-center">
                <h4 className="event-name">North East BCS Picnic</h4>
                <div className="text-center">
                  <a href="/contact" className="os-btn event-btn">
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/events/event--6.jpg"}
                className="img-fluid team-pic-one"
                alt="meeple perk building"
              />
              <div className="event-content text-center">
                <h4 className="event-name">Meeple Perk - Board Games Cafe</h4>
                <div className="text-center">
                  <a href="/contact" className="os-btn event-btn">
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export { EventsPage };
