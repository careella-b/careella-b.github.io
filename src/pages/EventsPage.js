import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImageSlider, Newsletter } from "../components/index.js";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from 'react-router-dom';

/**
 * Events page displays all events
 *
 */

function EventsPage() {

  const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const querySnapshot = await getDocs(collection(db, "events"));
            const eventsData = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setEvents(eventsData);
            console.log(eventsData);
        }
        fetchEvents();
    }, []);

  return (
      <>
          <ImageSlider
              topText="OUR COMMUNITY"
              bottomText="WHAT'S ON"
              bgClass="homepageBg"
          />

          <section className="slider__area events-bg-colour">
              <div className="container events-container d-flex flex-wrap">
                  {events.map((event) => (
                      <div className="event__wrapper  mb-60 flex-grow-1" key={event.id}>
                          <img
                              src={event.event_image}
                              className="img-fluid team-pic-one"
                              alt={event.event_title}
                          />
                          <div className="event-content text-center">
                              <Link to={`/event/${event.id}`}>
                                  <h4 className="event-name">{event.event_title}</h4>
                                  <div className="text-center">
                                      <p className="os-btn event-btn">TICKETS & INFO</p>
                                  </div>
                              </Link>
                          </div>
                      </div>
                  ))}
              </div>
          </section>
        <Newsletter/>
      </>
  );
}

export { EventsPage };
