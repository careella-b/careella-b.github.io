import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImageSlider } from "../components/index.js";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

/**
 * Events page displays all events
 *
 */

function EventsPage() {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsData = [];
      querySnapshot.forEach((doc) => {
        const event = doc.data();
        eventsData.push(event);
      });
      setEvent(eventsData);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <ImageSlider
        topText="OUR COMMUNITY"
        bottomText="WHAT'S ON"
        bgClass="homepageBg"
      />

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
                <div>
                  {events.map((event) => (
                    <div key={event.id} className="blog__item mb-30">
                      <h4 className="event-name">{event.event_title}</h4>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <a
                    href="/events/lunar-new-year-2023"
                    className="os-btn event-btn"
                  >
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
            <Col className="event_item">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/events/event--2.jpg"}
                className="img-fluid team-pic-one"
                alt="karaoke"
              />
              <div className="event-content text-center">
                <h4 className="event-name">Red Dinner - Food and Karaoke</h4>
                <div className="text-center">
                  <a href="/events/red-dinner" className="os-btn event-btn">
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
                <h4 className="event-name">Chilli Padi</h4>
                <div className="text-center">
                  <a href="/events/chilli-padi" className="os-btn event-btn">
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
                <h4 className="event-name">JJ's Cafe</h4>
                <div className="text-center">
                  <a href="/events/jj-cafe" className="os-btn event-btn">
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
                  <a
                    href="/events/north-east-picnic"
                    className="os-btn event-btn"
                  >
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
                  <a href="/events/meeple-perk" className="os-btn event-btn">
                    TICKETS & INFO
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export { EventsPage };
