import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from "react-bootstrap";


function ManageEventsPage() {
    const [events, setEvents] = useState([]);
    const [sortOption, setSortOption] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const fetchEvents = async () => {
            const querySnapshot = await getDocs(collection(db, "events"));
            const eventsData = await Promise.all(
                querySnapshot.docs.map(async (doc) => {
                    const eventData = { id: doc.id, ...doc.data() };
                    return { ...eventData };
                })
            );
            setEvents(eventsData);
        };
        fetchEvents();
    }, []);

    const handleSortOptionChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const customSort = (a, b) => {
        let orderMultiplier = sortOrder === "asc" ? 1 : -1;
        switch (sortOption) {
            case "date":
                return orderMultiplier * (new Date(a.event_date) - new Date(b.event_date));
            case "title":
                return orderMultiplier * a.event_title.localeCompare(b.event_title);
            case "venue":
                return orderMultiplier * a.venue.localeCompare(b.venue);
            case "price":
                return orderMultiplier * (a.price - b.price);
            default:
                return 0;
        }
    };

    

    return (
        <div className="pl-50 pr-50 pt-50">
            <div className="d-flex align-items-center mb-4">
                <h3 className="black-color mr-4">Manage Events</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                    <label htmlFor="sortOption" className="mr-2">Sort by:</label>
                    <select
                        id="sortOption"
                        className="form-control custom-dropdown mr-4"
                        value={sortOption}
                        onChange={handleSortOptionChange}
                    >
                        <option value="date">Date</option>
                        <option value="title">Title</option>
                        <option value="venue">Venue</option>
                        <option value="price">Price</option>
                    </select>
                    <label htmlFor="sortOrder" className="mr-2">Order:</label>
                    <select
                        id="sortOrder"
                        className="form-control custom-dropdown"
                        value={sortOrder}
                        onChange={handleSortOrderChange}
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <button className="os-btn-5">
                    + Add Event
                </button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Event Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Accessibility</th>
                        <th>Age Restriction</th>
                        <th>Event Description</th>
                        <th>Price</th>
                        <th>Venue</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events
                        .sort(customSort)
                        .map((event) => (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.event_title}</td>
                                <td>{event.event_date}</td>
                                <td>{event.start_time}</td>
                                <td>{event.end_time}</td>
                                <td>{event.accessibility}</td>
                                <td>{event.age_restriction}+</td>
                                <td>{event.event_description}</td>
                                <td>&#163;{event.price}</td>
                                <td>{event.venue}</td>
                                <td >
                                    <div className="d-flex">
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="tooltip-top">Edit</Tooltip>}>
                                            <Link to={`/admin/events/edit/${event.id}`} className="os-btn-4 mr-2">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </Link>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="tooltip-top">Delete</Tooltip>}>
                                            <button className="os-btn-warning">
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </OverlayTrigger>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export { ManageEventsPage };
