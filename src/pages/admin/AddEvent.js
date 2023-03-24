import { useState, useEffect } from "react";
import { collection, getDocs, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";

function AddEvent() {
    const [eventTitle, setEventTitle] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [accessibility, setAccessibility] = useState("");
    const [ageRestriction, setAgeRestriction] = useState("");
    const [endTime, setEndTime] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [price, setPrice] = useState("");
    const [startTime, setStartTime] = useState("");
    const [venue, setVenue] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const id = eventTitle.toLowerCase().replace(/\s/g, '');
            const docRef = await setDoc(doc(db, "events", id), {
                event_title: eventTitle,
                event_description: eventDescription,
                accessibility,
                age_restriction: ageRestriction,
                end_time: endTime,
                event_date: eventDate,
                price,
                start_time: startTime,
                venue,
            });
            // Reset form fields
            setEventTitle("");
            setEventDescription("");
            setAccessibility("");
            setAgeRestriction("");
            setEndTime("");
            setEventDate("");
            setPrice("");
            setStartTime("");
            setVenue("");

            navigate(`/admin/events/edit/${id}`);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };


    return (
        <div className="container pl-50 pr-50 pt-50 pb-50">
            <h3 className="black-color pb-30">Add Event</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="eventTitle">Event Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventTitle"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDescription">Event Description</label>
                    <textarea
                        className="form-control"
                        id="eventDescription"
                        rows="10"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="accessibility">Accessibility</label>
                    <input
                        type="text"
                        className="form-control"
                        id="accessibility"
                        value={accessibility}
                        onChange={(e) => setAccessibility(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ageRestriction">Age Restriction</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ageRestriction"
                        value={ageRestriction}
                        onChange={(e) => setAgeRestriction(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="eventDate"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startTime">Start Time</label>
                    <input
                        type="time"
                        className="form-control"
                        id="startTime"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endTime">End Time</label>
                    <input
                        type="time"
                        className="form-control"
                        id="endTime"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="venue">Venue</label>
                    <input
                        type="text"
                        className="form-control"
                        id="venue"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                    />
                </div>
                <button type="submit" className="secondary-btn">
                    Save
                </button>
            </form>
        </div>
    );
}

export { AddEvent };


