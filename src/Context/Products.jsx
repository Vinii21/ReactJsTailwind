import { createContext, useEffect, useState } from "react";
import { getProducts } from "../API/fakeStore";

const ProductsContext = createContext();

const ProviderProducts = ({children}) => {

    const [products, setProducts]= useState([]);
    const [count, setCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showCar, setShowCar] = useState(false);
    const [selectProduct, setSelectProduct] = useState({});
    const [addCar, setAddCar] = useState([]);

    const addToCar = (newProduct) => {
        setCount(count+1)
        setAddCar([...addCar, newProduct])
    }

    useEffect(()=>{
        getProducts(setProducts)
    },[]);

    return (
        <ProductsContext.Provider value={{products, showModal, setShowModal, setSelectProduct, selectProduct, addToCar, showCar, setShowCar, addCar}}>
            {children}
        </ProductsContext.Provider>
    )
};

export {ProductsContext, ProviderProducts};