import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AdminSidebar() {
    return (
        <div
            className="d-flex flex-row border justify-content-between align-items-center  pr-20 pl-20 "
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
                    <Link to="/admin/manage/events">
                        <NavDropdown.Item className="submenu transition-3" as="span">
                            EVENTS
                        </NavDropdown.Item>
                    </Link>
                    <Link to="/admin/manage/blog">
                        <NavDropdown.Item className="submenu transition-3" as="span">
                            BLOG
                        </NavDropdown.Item>
                    </Link>
                </NavDropdown>
                <Link to="/admin/manage/accounts">
                    <Nav.Link as="span">ACCOUNTS</Nav.Link>
                </Link>
            </div>

            <div className="align-self-center">
                <a href="#" className="secondary-btn">
                    LOG OUT
                </a>
            </div>
        </div>
    );
}
export { AdminSidebar };
