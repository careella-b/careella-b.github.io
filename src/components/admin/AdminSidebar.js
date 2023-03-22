import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AdminSidebar() {
    
    return (
        <div className="d-flex flex-row">
            <div className="">
                        <div className="">
                            <img
                                src={process.env.PUBLIC_URL + '/assets/img/logo/esa--submark-logo.png'}
                                width="80%"
                                className=""
                                alt="ESA.NE logo"
                            />
                        </div>
                <Nav>
                    <Link to="/admin"><Nav.Link as="span">DASHBOARD</Nav.Link></Link>
                    <NavDropdown title="MANAGE CONTENT" id="basic-nav-dropdown" className="transition-3 has-dropdown">
                        <Link to="/admin/manage/events"><NavDropdown.Item className="submenu transition-3" as="span">EVENTS</NavDropdown.Item></Link>
                        <Link to="/admin/manage/blog"><NavDropdown.Item className="submenu transition-3" as="span">BLOG</NavDropdown.Item></Link>
                    </NavDropdown>
                    <Link to="/admin/manage/accounts"><Nav.Link as="span">ACCOUNTS</Nav.Link></Link>
                </Nav>
            </div>
        </div>
        
    );
}

export { AdminSidebar };
    /*
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AdminSidebar() {
    return (
         <Navbar id="sidebar">
           
            <Navbar.Brand className="sidebar-header">
                
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

export { AdminSidebar };*/
