import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUser, faComments } from '@fortawesome/free-solid-svg-icons'

function AdminDashboard() {
    return (
        <>
            <section className="container pt-60 pb-100">
                <h3 className="black-color text-center pb-30">Admin Dashboard</h3>
                <div className="container d-flex justify-content-between">
                    <div className="pt-20 text-center">
                        <div className="">
                            <Link to="/admin/events">
                                <FontAwesomeIcon icon={faCalendarDays} style={{ "height":"10em" }} />
                            </Link>
                        </div>
                        <div className="blog__content">
                            <Link to="/admin/events">
                                <h4 className="black-color underline">Manage Events</h4>
                            </Link>
                            <div className="">
                                <p>View and manage all events.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 text-center">
                        <div className="">
                            <Link to="/admin/blog">
                                <FontAwesomeIcon icon={faComments} style={{ "height": "10em" }} />
                            </Link>
                        </div>
                        <div className="blog__content">
                            <Link to="/admin/blog">
                                <h4 className="black-color underline">Manage Blog</h4>
                            </Link>
                            <div className="">
                                <p>View and manage blog posts.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 text-center">
                        <div className="">
                            <Link to="/admin/accounts">
                                <FontAwesomeIcon icon={faUser} style={{"height": "10em" }} />
                            </Link>
                        </div>
                        <div className="blog__content">
                            <Link to="/admin/accounts">
                                <h4 className="black-color underline">Manage Accounts</h4>
                            </Link>
                            <div className="">
                                <p>View and manage user accounts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}

export { AdminDashboard };