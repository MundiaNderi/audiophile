import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
    const [productData, setProductData] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/audio/list");
                console.log(response.data.data);
                setProductData(response.data.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        fetchData();
    }, [])


    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        productData,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
