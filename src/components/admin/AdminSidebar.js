import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useUserContext } from "../../UserContext.js";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {

    const { user, logoutUser } = useUserContext();

    const navigate = useNavigate();

    
    return (
        <div
            className="d-flex flex-row border justify-content-between align-items-center  pr-30 pl-20 "
        >
            <div className="d-flex flex-row align-items-center">
                <img
                    src={process.env.PUBLIC_URL + '/assets/img/logo/esa--submark-logo.png'}
                    width="15%"
                    className=""
                    alt="ESA.NE logo"
                />
                <Link to="/admin">
                    <Nav.Link as="span">DASHBOARD</Nav.Link>
                </Link>
                <NavDropdown
                    title="MANAGE CONTENT"
                    id="basic-nav-dropdown"
                    className="transition-3 has-dropdown"
                >
                    <Link to="/admin/events">
                        <NavDropdown.Item className="submenu transition-3" as="span">
                            EVENTS
                        </NavDropdown.Item>
                    </Link>
                    <Link to="/admin/blog">
                        <NavDropdown.Item className="submenu transition-3" as="span">
                            BLOG
                        </NavDropdown.Item>
                    </Link>
                </NavDropdown>
                <Link to="/admin/accounts">
                    <Nav.Link as="span">ACCOUNTS</Nav.Link>
                </Link>
                <Link to="/admin/analytics">
                    <Nav.Link as="span">SITE ANALYTICS</Nav.Link>
                </Link>
            </div>

            <div className="align-self-center">
                <a href="/" className="mr-1" onClick={navigate("/")}>
                    EXIT
                </a>
            </div>
        </div>
    );
}
export { AdminSidebar };
