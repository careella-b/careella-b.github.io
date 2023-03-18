import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from '../Firebase';
import { useParams } from 'react-router-dom';
import { ImageSlider, Map, Newsletter } from "../components/index.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


/**
 * Event post component fetches and displays the selected event from the db
 * 
 */

function EventPost() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [eventImageURL, setEventImageURL] = useState('');

    useEffect(() => {
        const fetchEvent = async () => {
        const eventDoc = await getDoc(doc(db, "events", id));
        if (eventDoc.exists()) {
          const eventImageRef = ref(storage, `events/${id}.jpg`);
          const imageUrl = await getDownloadURL(eventImageRef);
          setEventImageURL(imageUrl);
          setEvent({ id: eventDoc.id, ...eventDoc.data(), event_image_url: imageUrl });
        }
    }
      fetchEvent();
    }, [id]);

    if (!event) {
        return null; // or display a loading spinner
    }


    return (
          <><ImageSlider
              topText="OUR COMMUNITY"
              bottomText={event.event_title}
              bgClass="homepageBg"
          />
                <section className="slider__area event-bg-colour">
                    <div className="container events-container">
                        <Row className="event-row-1">
                            <Col>
                                <h1>{event.event_title}</h1>
                                <img
                                    src={event.event_image_url}
                                    className="img-fluid"
                                    alt={event.event_title}
                                />
                            </Col>
                            <Col>
                                <div className="event-content text-center">
                                    <h2 className="event-details-title">EVENT DETAILS</h2>
                                    <div className="text-left event-details-text-container">
                                        <p className="event-details-text">DATE: {event.event_date}</p>
                                        <p className="event-details-text">VENUE: {event.venue}</p>
                                        <p className="event-details-text">PRICE: £{event.price}</p>
                                        <p className="event-details-text">STARTS: {event.start_time}</p>
                                        <p className="event-details-text">FINISHES: {event.end_time}</p>
                                        <p className="event-details-text">AGE RESTRICTION: {event.age_restriction}</p>
                                        <a href="/cart" className="os-btn purchase-btn"> ADD TO CART</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="event-row-2">
                            <div className="event-content text-left">
                                <h2 className="event-details-title">EVENT INFORMATION</h2>
                                    <Tabs defaultActiveKey="first">
                                    <Tab eventKey="first" title="DESCRIPTION">
                                        <p className="event-details-text">{event.event_description}</p>
                                    </Tab>
                                    <Tab eventKey="second" title="MAP">
                                        <Map />
                                    </Tab>
                                    <Tab eventKey="third" title="ACCESSIBILITY">
                                        <p className="event-details-text">{event.accessibility}</p>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Row>
                    </div>
                </section>
                <Newsletter />
           </>
        );
        
}

export { EventPost };

            


