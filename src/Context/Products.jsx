import { createContext, useEffect, useState } from "react";
import { getProducts } from "../API/fakeStore";

const ProductsContext = createContext();

const ProviderProducts = ({children}) => {

    const [products, setProducts]= useState([])

    useEffect(()=>{
        getProducts(setProducts)
    },[])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
};

export {ProductsContext, ProviderProducts};