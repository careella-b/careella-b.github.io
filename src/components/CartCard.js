import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from '../Firebase';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CartContext } from "../CartContext";
import { useContext } from "react";


/**
 * Event post component fetches and displays the selected event from the db
 * 
 */

function CartCard(props) {
    const cart = useContext(CartContext);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
        const eventDoc = await getDoc(doc(db, "events", props.id));
        if (eventDoc.exists()) {
          const eventImageRef = ref(storage, `events/${props.id}.jpg`);
          const imageUrl = await getDownloadURL(eventImageRef);
          setEvent({ id: eventDoc.id, ...eventDoc.data(), event_image_url: imageUrl });
        }
    }
      fetchEvent();
    }, [props.id]);

    if (!event) {
        return null; // or display a loading spinner
    }

    const eventQuantity = cart.getEventQuantity(event.id);

    function formatDate(timestamp) {
        let date;
        if (typeof timestamp === 'object' && 'seconds' in timestamp) {
            date = new Date(timestamp.seconds * 1000);
        } else {
            date = new Date(timestamp);
        }

        const ordinalSuffix = (n) => {
            const s = ["th", "st", "nd", "rd"];
            const v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        };

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        const formattedDate = date.toLocaleDateString('en-GB', options);
        const dayOfMonth = date.getDate();
        const dayWithOrdinal = ordinalSuffix(dayOfMonth);

        return formattedDate.replace(dayOfMonth, dayWithOrdinal);
    }


    return (
                    <div>
                        <Row>
                            <Col className="cart-col">
                                <img
                                    src={event.event_image_url}
                                    className="img-fluid event-img"
                                    alt={event.event_title}
                                />
                            </Col>
                            <Col className="cart-col">
                                <div className="text-center">
                                    
                                    <div className="text-left">
                                        <p className="cartdetails-title">{event.event_title.toUpperCase()}</p>
                                        <p className="event-details-text">DATE: {formatDate(event.event_date)}</p>
                                        <p className="event-details-text">PRICE: £{event.price}</p>
                                        <p className="event-details-text">STARTS: {event.start_time}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="cart-col">
                                <Row className="cart-btn-row">
                                    <div className="text-center">
                                            <button onClick={() => cart.addOneToCart(event.id)} className="secondary-btn cart-btn"> +</button>
                                            <input value={eventQuantity} readOnly type="number" id="typeNumber" className="form-control cart-quantity" />
                                            <button onClick={() => cart.removeOneFromCart(event.id)} className="secondary-btn cart-btn"> -</button>
                                    </div>
                                </Row>
                                <Row className="cart-btn-row">
                                        <div>
                                            <button onClick={() => cart.deleteFromCart(event.id)} className="secondary-btn cart-btn-del"><i className="fas fa-trash-alt"></i></button>
                                        </div>
                                </Row>
                                        <p className="cart-total">SUB-TOTAL : £{(event.price*eventQuantity).toFixed(2)}</p>
                            </Col>
                        </Row>
                        <hr className="hr cart-hr" />
                    </div>
        );
        
}

export { CartCard };