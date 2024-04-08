import { createContext } from "react";
import productData from '/data.json'
export const StoreContext = createContext(null)

console.log(productData)

const StoreContextProvider = (props) => {

    const contextValue = {
        productData
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider