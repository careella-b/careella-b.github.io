import { ImageSlider, Newsletter } from "../components/index.js";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { CartCard } from '../components/CartCard';
import { Link } from 'react-router-dom';



/**
 * Event post component fetches and displays the selected event from the db
 * 
 */

function CartPage() {
    const cart = useContext(CartContext);
    const totalCost = cart.getTotalCost();

    let cartList = cart.items.map((event) => <div>
        <CartCard id  = {event.id}/>
    </div>
    );

    const totalInCart = cart.getTotalInCart();

    const checkout = async () => {};


    return (
          <><ImageSlider
              topText="LET'S SEE YOUR CHOICES"
              bottomText="MY CART"
              bgClass="homepageBg"/>
                <section className="slider__area event-bg-colour">
                {totalInCart != 0 &&
                <div className="container events-container">
                {cartList}
                <p className="cart-total">TOTAL : £{totalCost}</p>
                <hr class="hr cart-hr" />
                <div className="text-center">
                        <button className="os-btn event-btn" onClick={checkout}>PRODEED TO CHECKOUT</button>
                </div>
                </div>}
                {totalInCart === 0 &&
                <div className="container events-container">
                    <div className="text-center">
                        <p className="event-details-text">Nothing here yet. Your added events will apear in your cart.</p>
                        <Link to={`/events`}>
                            <h4 className="event-name">See our events page</h4>
                            <div>
                                <p className="os-btn event-btn">EVENTS</p>
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