import { NoImageSlider } from "../components/index.js";

function CheckoutPage() {

    return (
        <><NoImageSlider pageTitle="CHECKOUT" bgClass="blackBg" />
            <section className="contact__area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="checkout__form">
                                <form action="assets/mail.php" id="checkout-form">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="checkout__input">
                                                <label>Card Number<span className="required">*</span></label>
                                                <input type="int">
                                                </input></div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact__input">
                                                <label>Account Number <span className="required">*</span></label>
                                                <input type="int">
                                                </input></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact__input">
                                                <label>CVV <span className="required">*</span></label>
                                                <input type="int">
                                                </input></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="checkout__submit">
                                                <button type="submit" className="os-btn os-btn-black">Checkout</button>
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


export { CheckoutPage };