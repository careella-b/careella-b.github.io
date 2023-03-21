import {createContext, useState, useEffect} from 'react';
import { db, storage } from './Firebase';
import { collection, getDocs } from "firebase/firestore";

export const CartContext = createContext({
    items: [],
    getEventQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    getTotalInCart: () => {},
})

export function CartProvider({children}) {
    const [cartEvents, setCartEvents] = useState(localStorage.cart ? JSON.parse(localStorage.cart) : []);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const querySnapshot = await getDocs(collection(db, "events"));
            const eventsData = await Promise.all(querySnapshot.docs.map(async (doc) => {
                const eventData = { id: doc.id, ...doc.data() };
                return { ...eventData};
                }));
            setEvents(eventsData);
        }
        fetchEvents();
    }, [storage]);

    useEffect(() => {
        localStorage.cart = JSON.stringify(cartEvents);
    }, [cartEvents]);

    function getEventQuantity(id) {
        const quantity = cartEvents.find(event => event.id === id)?.quantity
    
        if(quantity === undefined){
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getEventQuantity(id);

        if(quantity === 0) { //add a new event to the cart
            setCartEvents(
                [
                    ...cartEvents,
                    {
                        id: id,
                        quantity: 1,
                    }
                ]
            )
        } else {
            setCartEvents(
                cartEvents.map(
                    event =>
                    event.id === id
                    ? { ...event, quantity: event.quantity + 1}
                    : event
                )
            )

        }
    }

    function removeOneFromCart(id) {
        const quantity = getEventQuantity(id);

        if(quantity == 1){
            deleteFromCart(id);
        } else {
            setCartEvents(
                cartEvents.map(
                    event =>
                    event.id === id
                    ? { ...event, quantity: event.quantity - 1}
                    : event
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartEvents (
            cartEvents =>
            cartEvents.filter(currentEvent => {
                return currentEvent.id != id;
            })
        )
    }

    function getTotalCost() {
        if(events && events.length > 0){
            let totalCost = 0;
            cartEvents.map((cartItem) => {
            const eventData = events.find(event => event.id === cartItem.id);
            totalCost += (eventData.price * cartItem.quantity);
            });
            return totalCost.toFixed(2);
        }
        
    }

    function getTotalInCart() {
        let totalEvents = 0;
        cartEvents.map((cartItem) => {
            totalEvents += (cartItem.quantity);
        });
        return totalEvents;
    }

    const contextValue = {
        items: cartEvents,
        getEventQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        getTotalInCart,
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;
// COntext (cart, addToCart, removeFromCart)