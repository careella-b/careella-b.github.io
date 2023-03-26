import { ImageSlider, Newsletter } from "../components/index.js";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { CartCard } from '../components/CartCard';
import { Link } from 'react-router-dom';
//import { response } from "express";



/**
 * Event post component fetches and displays the selected event from the db
 * 
 */

function CartPage() {
    const cart = useContext(CartContext);
    const totalCost = cart.getTotalCost();

    let cartList = cart.items.map((event) => <div key = {event.id}>
        <CartCard id  = {event.id}/>
    </div>
    );
    const totalInCart = cart.getTotalInCart();

   /* const checkout = async () => {
        await fetch("http://localhost:4000/checkout", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url);
            }
        })
    }

    const stripePromise = loadStripe('sk_test_51MpLseIqrbkgWvVRIsSqQ3WMu1v4ZGIqwGVG0nyVLzgcPQYAiyD6aRjgkMfLqcqM1NrYTPmBxeLLljAvD4x3aBOm001s5kNlmG');

    const checkout = async () => {
        const stripe = await stripePromise;

        const session = await fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        }).then((response) => response.json());

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error);
        }
    };*/

    //onClick={checkout}

    return (
        <><ImageSlider
            topText="LET'S SEE YOUR CHOICES"
            bottomText="MY CART"
            bgClass="homepageBg" />
            <section className="slider__area event-bg-colour">
                {totalInCart !== 0 &&
                    <div className="container events-container">
                        {cartList}
                        <p className="cart-total">TOTAL : £{totalCost}</p>
                        <hr className="hr cart-hr" />
                        <div className="text-center">
                            <button className="secondary-btn" >PRODEED TO CHECKOUT</button>
                        </div>
                    </div>}
                {totalInCart === 0 &&
                    <div className="container events-container">
                        <div className="text-center">
                            <p className="event-details-text">Nothing here yet. Your added events will apear in your cart.</p>
                            <Link to={`/events`}>
                                <h4 className="event-name">See our events page</h4>
                                <div>
                                    <p className="secondary-btn">EVENTS</p>
                                </div>
                            </Link>
                        </div>
                    </div>}
            </section>
            <Newsletter />
        </>
        );
        
}

export { CartPage };