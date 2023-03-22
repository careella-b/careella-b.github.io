/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";


function AdminSidebar({ color, image, routes }) {
    const location = useLocation();
    const activeRoute = (routeName) => {
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    return (
        <div className="sidebar" data-image={image} data-color={color}>
            <div
                className="sidebar-background"
                style={{
                    backgroundImage: "url(" + image + ")"
                }}
            />
            <div className="sidebar-wrapper">
                <div className="logo d-flex align-items-center justify-content-start">
                    <a
                        href="https://www.creative-tim.com?ref=lbd-sidebar"
                        className="simple-text logo-mini mx-1"
                    >
                        <div className="logo-img">
                            <img
                                src={process.env.PUBLIC_URL + '/assets/img/logo/esa--primary-logo.png'}
                                width="60%"
                                className="d-inline-block"
                                alt="ESA.NE logo"
                            />
                        </div>
                    </a>
                    <a className="simple-text" href="http://www.creative-tim.com">
                        Creative Tim
                    </a>
                </div>
                <Nav>
                    {routes.map((prop, key) => {
                        if (!prop.redirect)
                            return (
                                <li
                                    className={
                                        prop.upgrade
                                            ? "active active-pro"
                                            : activeRoute(prop.layout + prop.path)
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.layout + prop.path}
                                        className="nav-link"
                                        activeClassName="active"
                                    >
                                        <i className={prop.icon} />
                                        <p>{prop.name}</p>
                                    </NavLink>
                                </li>
                            );
                        return null;
                    })}
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
