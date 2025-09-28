import { useState } from "react";

export default function useCart(){
    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    const addToCart = (product) => {
        setCartItems((prev)=> {
            const exists = prev.find((item)=> item.id === product.id);
            if(exists) return prev;
            return [...prev, product]
        })
    }

    const removeFromCart = (id) => {
        setCartItems((prev)=> prev.filter((item)=> item.id !== id));
    };

    const clearCart = () => {
        setCartItems([])
    }

    const toggleCart =()=> {
        setIsOpen((prev)=> !prev);
    }


    return {cartItems, addToCart, removeFromCart, clearCart, isOpen, toggleCart}
}