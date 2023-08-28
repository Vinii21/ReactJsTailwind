import { createContext, useEffect, useState } from "react";
import { getProducts } from "../API/fakeStore";

const ProductsContext = createContext();

const ProviderProducts = ({children}) => {

    const [products, setProducts]= useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        getProducts(setProducts)
    },[])

    return (
        <ProductsContext.Provider value={{products, count, setCount}}>
            {children}
        </ProductsContext.Provider>
    )
};

export {ProductsContext, ProviderProducts};