import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate, useParams } from "react-router-dom";

function EditEvent() {

    const [eventTitle, setEventTitle] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [price, setPrice] = useState("");
    const [venue, setVenue] = useState("");
    const [ageRestriction, setAgeRestriction] = useState(false);
    const [accessibility, setAccessibility] = useState(false);
    const [eventDate, setEventDate] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchEvent = async () => {
            const docRef = doc(db, "events", id);
            const docSnapshot = await getDoc(docRef);
            const eventData = docSnapshot.data();
            setEventTitle(eventData.event_title);
            setEventDescription(eventData.event_description);
            setStartTime(eventData.start_time);
            setEndTime(eventData.end_time);
            setPrice(eventData.price);
            setVenue(eventData.venue);
            setAgeRestriction(eventData.age_restriction);
            setAccessibility(eventData.accessibility);
            setEventDate(new Date(eventData.event_date));

        };
        fetchEvent();
    }, [id]);

    const renderMessage = () => {
        if (message) {
            const messageClass = messageType === "success" ? "alert-success" : "alert-danger";
            return (
                <div className={`alert ${messageClass}`} role="alert">
                    {message}
                </div>
            );
        }
        return null;
    };

    const handleTitleChange = (e) => {
        setEventTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setEventDescription(e.target.value);
    };

    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
    };

    const handleEndTimeChange = (e) => {
        setEndTime(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleVenueChange = (e) => {
        setVenue(e.target.value);
    };

    const handleAgeRestrictionChange = (e) => {
        setAgeRestriction(e.target.value);
    };

    const handleAccessibilityChange = (e) => {
        setAccessibility(e.target.value);
    };

    const handleDateChange = (e) => {
        setEventDate(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = doc(db, "events", id);
            await updateDoc(docRef, {
                event_title: eventTitle,
                event_description: eventDescription,
                event_date: eventDate,
                start_time: startTime,
                end_time: endTime,
                venue: venue,
                price: price,
                accessibility: accessibility,
                age_restriction: ageRestriction,
            });
            setMessage("Event updated successfully. You will be redirected...");
            setMessageType("success");
            setTimeout(() => [setMessage(""), navigate("/admin/events")], 5000);


        } catch (error) {
            console.error("Error updating event: ", error);
            setMessage("Error updating event: " + error.message);
            setMessageType("error");
            setTimeout(() => setMessage(""), 10000);
        }
    };

    return (
        <div className="container pl-50 pr-50 pt-50 pb-50">
            <h3 className="black-color pb-30">Edit Event</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="eventTitle">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventTitle"
                        value={eventTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDescription">Description</label>
                    <textarea
                        className="form-control"
                        id="eventDescription"
                        rows="10"
                        value={eventDescription}
                        onChange={handleDescriptionChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="accessibility">Accessibility</label>
                    <textarea
                        className="form-control"
                        id="accessibility"
                        value={accessibility}
                        onChange={handleAccessibilityChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ageRestriction">Age Restriction</label>
                    <textarea
                        className="form-control"
                        id="ageRestriction"
                        value={ageRestriction}
                        onChange={handleAgeRestrictionChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDate">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="eventDate"
                        value={eventDate}
                        onChange={handleDateChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startTime">Start Time</label>
                    <input
                        type="time"
                        className="form-control"
                        id="startTime"
                        value={startTime}
                        onChange={handleStartTimeChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endTime">End Time</label>
                    <input
                        type="time"
                        className="form-control"
                        id="endTime"
                        value={endTime}
                        onChange={handleEndTimeChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="venue">Venue</label>
                    <input
                        type="text"
                        className="form-control"
                        id="venue"
                        value={venue}
                        onChange={handleVenueChange}
                    />
                </div>

                <button type="submit" className="secondary-btn mb-20">
                    Save
                </button>
                {renderMessage()}
            </form>
        </div>
    );
}

export { EditEvent };