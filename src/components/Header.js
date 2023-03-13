import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/header.css';


/**
 * Header component
 * 
 * Common header content containing nav menu for desktop and mobile
 * 
 */

//TODO: display account drop down only if logged in (conditional rendering). otherwise display log in / sign up buttons

function Header() {

    var cartTotal = "(0)"; //TODO: get cart total from cart

    return (
        <Navbar id="header-sticky" className="header__area grey-bg navbar-dark align-items-center">
            <div className="mobile-menu-btn d-lg-none">
                <a href="javascript:void(0);" className="mobile-menu-toggle"><i className="fas fa-bars"></i></a>
            </div>

            <Navbar.Brand className="container logo col-xl-2 col-lg-2 col-md-3 col-sm-3 justify-content-center " href="/">
                <img
                    src={process.env.PUBLIC_URL + '/assets/img/logo/esa--primary-logo.png'}
                    width="60%"
                    className="d-inline-block"
                    alt="ESA.NE logo"
                />
            </Navbar.Brand>
            
            <Nav className="container col-xl-6 col-lg-6 col-md-5 col-sm-5 header__right p-relative d-flex justify-content-around align-items-center main-menu">
                <Link to="/"><Nav.Link as="span">HOME</Nav.Link></Link>
                <Link to="/events"><Nav.Link as="span">EVENTS</Nav.Link></Link>
                <NavDropdown title="ABOUT US" id="basic-nav-dropdown" className="transition-3 has-dropdown">
                    <Link to="/about-us/team"><NavDropdown.Item className="submenu transition-3" as="span">TEAM</NavDropdown.Item></Link>
                    <Link to="/about-us/our-demands"><NavDropdown.Item className="submenu transition-3" as="span">OUR DEMANDS</NavDropdown.Item></Link>
                    <Link to="/about-us/mission-statement"><NavDropdown.Item className="submenu transition-3" as="span">MISSION STATEMENT</NavDropdown.Item></Link>
                </NavDropdown>
                <Link to="/blog"><Nav.Link as="span">BLOG</Nav.Link></Link>
                <Link to="/contact"><Nav.Link as="span">CONTACT US</Nav.Link></Link>
            </Nav>

            <Nav className="container col-xl-2 col-lg-2 col-md-3 col-sm-3 header__action">
                <div className="d-flex justify-content-left">
                    <i className="align-self-center fa-solid fa-circle-user navIcon"></i>
                    <NavDropdown title="" id="basic-nav-dropdown" className="transition-3 has-dropdown">
                        <Link to="/profile"><NavDropdown.Item className="submenu transition-3" as="span">Profile</NavDropdown.Item></Link>
                        <Link to="/account"><NavDropdown.Item className="submenu transition-3" as="span">My Account</NavDropdown.Item></Link>
                        <Link to="/logout"><NavDropdown.Item className="submenu transition-3" as="span">Log Out</NavDropdown.Item></Link>
                    </NavDropdown>
                </div>
                <Link to="/cart"><Nav.Link as="span"><i className="ion-bag"></i> Cart <span>{cartTotal}</span></Nav.Link></Link>
            </Nav>

        </Navbar>


    )
}

export { Header }; 
