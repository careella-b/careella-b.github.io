/**
 * Reusable footer component
 * 
 
 */

function Footer() {
    return (
        <section className="footer__area footer-bg">
            <div className="footer__top pt-100 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="footer__widget mb-30">
                                <div className="footer__widget-title mb-25">
                                    <a href="index.html"><img src="../assets/img/logo/logo-2.png" alt="logo"/></a>
                                </div>
                                <div className="footer__widget-content">
                                    <p>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p>
                                    <div className="footer__contact">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <i className="fal fa-map-marker-alt"></i>
                                                </div>
                                                <div className="text">
                                                    <span>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fal fa-envelope-open-text"></i>
                                                </div>
                                                <div className="text">
                                                    <span>Email: Contact@basictheme.com</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fal fa-phone-alt"></i>
                                                </div>
                                                <div className="text">
                                                    <span>Phone Number: (800) 123 456 789</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="footer__widget mb-30">
                                <div className="footer__widget-title">
                                    <h5>information</h5>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__links">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Delivery Inforamtion</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms & Condition</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="footer__widget mb-30">
                                <div className="footer__widget-title mb-25">
                                    <h5>Customer Service</h5>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__links">
                                        <ul>
                                            <li><a href="#">Shipping Policy</a></li>
                                            <li><a href="#">Help & Contact Us</a></li>
                                            <li><a href="#">Returns & Refunds</a></li>
                                            <li><a href="#">Online Stores</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <div className="footer__copyright">
                                <p>Copyright © <a href="index.html">Outstock</a> all rights reserved. Powered by <a href="index.html">Theme_pure</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer__social f-right">
                                <ul>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                    <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export { Footer };