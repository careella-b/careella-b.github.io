import { NoImageSlider } from  "../components/index.js";
/**
 * Contact page displays the org's contact info
 * 
 */

function ContactPage() {

    return (
        <><NoImageSlider pageTitle="CONTACT US" bgClass="blackBg" />
            <div className="container d-flex mt-60 ml-60">
                <p className="black-color">
                    Don’t hesitate to reach out with the contact information below,
                    or send a message using the form.

                    We ask that you please fill in the ‘name’ and ’email’
                    fields of the form below so that we can respond to your query.

                    However, we are trialling these fields as non-mandatory so that you
                    can report feedback/issues to us anonymously. Please do not use this
                    contact form to send us abusive messages, we would like to keep these fields
                    optional so that people feel safe in reporting issues to us.</p>
                </div>
            <section className="contact__area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact__info">
                                <h3>Find us here.</h3>
                                <ul className="mb-55">
                                    <li className="d-flex mb-35">
                                        <div className="contact__info-icon mr-20">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact__info-content">
                                            <h6>Address:</h6>
                                            <span>Address</span>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-35">
                                        <div className="contact__info-icon mr-20">
                                            <i className="fal fa-envelope-open-text"></i>
                                        </div>
                                        <div className="contact__info-content">
                                            <h6>Email:</h6>
                                            <span>email</span>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-35">
                                        <div className="contact__info-icon mr-20">
                                            <i className="fal fa-phone-alt"></i>
                                        </div>
                                        <div className="contact__info-content">
                                            <h6>Number Phone:</h6>
                                            <span>phone number</span>
                                        </div>
                                    </li>
                                </ul>
                               

                                <div className="contact__social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact__form">
                                <h3>Contact Us.</h3>
                                <form action="assets/mail.php" id="contact-form">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact__input">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text">
                                                </input></div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact__input">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email">
                                                </input></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact__input">
                                                <label>Subject <span className="required">*</span></label>
                                                <input type="text">
                                                </input></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact__input">
                                                <label>Message</label>
                                                <textarea cols="30" rows="10"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact__submit">
                                                <button type="submit" className="os-btn os-btn-black">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}


export { ContactPage };