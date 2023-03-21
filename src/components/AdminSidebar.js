import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AdminSidebar() {
    return (
         <Navbar id="sidebar">
           
            <Navbar.Brand className="sidebar-header">
                <img
                    src={process.env.PUBLIC_URL + '/assets/img/logo/esa--primary-logo.png'}
                    width="60%"
                    className="d-inline-block"
                    alt="ESA.NE logo"
                />
            </Navbar.Brand>
            <Nav>
                <ul className="list-unstyled components">
                    <li>
                        <Link exact to="/admin/dashboard" activeClassName="active">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users" activeClassName="active">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/blog" activeClassName="active">
                            Blog
                        </Link>
                    </li>
                </ul>
            </Nav>
        </Navbar>
        
    );
}

export { AdminSidebar };
