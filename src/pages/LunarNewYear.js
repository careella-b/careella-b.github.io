import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Map } from "../components/index.js";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NumberPicker from "react-widgets/NumberPicker";

/**
 * Individual event page that shows info about the event
 *
 */

function LunarNewYear() {
  const [event, setEvent] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "event")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEvent(newData);
      console.log(event, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
                    {event?.map((event, i) => (
                      <h1 key={i}>{event.event_title}</h1>
                    ))}
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
                className="img-fluid"
                alt="china town"
              />
            </Col>
            <Col>
              <div className="event-content text-center">
                <h2 className="event-details-title">EVENT DETAILS</h2>

                <div className="text-left event-details-text-container">
                  {event?.map((event, i) => (
                    <p className="event-details-text" key={i}>
                      DATE: {event.event_date}
                    </p>
                  ))}
                  {event?.map((event, i) => (
                    <p className="event-details-text" key={i}>
                      VENUE: {event.venue}
                    </p>
                  ))}
                  {event?.map((event, i) => (
                    <p className="event-details-text" key={i}>
                      PRICE: {event.price}
                    </p>
                  ))}
                  {event?.map((event, i) => (
                    <p className="event-details-text" key={i}>
                      STARTS: {event.start_time}
                    </p>
                  ))}
                  {event?.map((event, i) => (
                    <p className="event-details-text" key={i}>
                      FINISHES: {event.end_time}
                    </p>
                  ))}
                  {event?.map((event, i) => (
                    <p className="event-details-text" key={i}>
                      AGE: {event.age_restriction}
                    </p>
                  ))}
                  <NumberPicker min={1} max={5} defaultValue={1} />;
                  <a href="/contact" className="os-btn purchase-btn">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="event-row-2">
            <div className="event-content text-left">
              <h2 className="event-details-title">EVENT INFORMATION</h2>
              <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="DESCRIPTION">
                  {event?.map((event, i) => (
                    <p className="event-details-text" key={i}>
                      {event.event_description}
                    </p>
                  ))}
                </Tab>
                <Tab eventKey="second" title="MAP">
                  <Map />
                </Tab>
                <Tab eventKey="third" title="ACCESSIBILITY">
                  {event?.map((event, i) => (
                    <p className="event-details-text" key={i}>
                      {event.accessibility}
                    </p>
                  ))}{" "}
                </Tab>
              </Tabs>
            </div>
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
                <div className="mx-auto col-10 col-md-8 col-lg-6">
                  <Form className="text-center">
                    <Form.Group>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="subscribe-input"
                      />
                    </Form.Group>
                    <Button className="os-btn secondary-btn mt-3" type="submit">
                      SUBSCRIBE
                    </Button>
                  </Form>
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
