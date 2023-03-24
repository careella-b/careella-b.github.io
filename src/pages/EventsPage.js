import { ImageSlider } from "../components/index.js";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { db, storage } from "../Firebase";
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
      const eventsData = await Promise.all(querySnapshot.docs.map(async (doc) => {
        const eventData = { id: doc.id, ...doc.data() };
          const files = await listAll(ref(storage, 'events'));
          let imageUrl = null;
          const eventImageFile = files.items.find(item => item.name === `${eventData.id}.jpg`);
          if (eventImageFile) {
             imageUrl = await getDownloadURL(eventImageFile);

          } else {
              imageUrl = process.env.PUBLIC_URL + "/assets/img/events/default.jpg";
          }
        
        return { ...eventData, event_image_url: imageUrl };
      }));
      setEvents(eventsData);
    }
    fetchEvents();
  }, [storage]);

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
                      <div className="event__wrapper col-12 col-sm-6 text-center" key={event.id}>
                          <img
                              src={event.event_image_url}
                              className="img-fluid event-img"
                              alt={event.event_title}
                          />
                          <div className="event-content text-center">
                              <Link to={`/event/${event.id}`}>
                                  <h4 className="event-name">{event.event_title}</h4>
                                  <div>
                                      <p className="secondary-btn">TICKETS & INFO</p>
                                  </div>
                              </Link>
                          </div>
                      </div>
                  ))}
              </div>
          </section>
      </>
  );
}

export { EventsPage };
