import productData from '/data.json'
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

console.log(productData)

const StoreContextProvider = (props) => {

    //const url = "http://localhost:4000";
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(()=> {
        console.log(cartItems);
    }, [cartItems])


    const contextValue = {
        productData,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider