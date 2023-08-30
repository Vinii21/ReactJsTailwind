import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ProductsContext } from "../Context/Products";

const ProductDetail = () => {
    const {setShowModal, selectProduct} = useContext(ProductsContext);

    const {title, category, description, price, image} = selectProduct;

    return (
        <div className="overflow-auto fixed p-2 bg-white top-14 left-0 rounded-lg border border-black w-[270px] h-[calc(100vh-70px)]">
           <di className="sticky top-0 w-full flex flex-row justify-between">
            <h3 className="text-base font-bold">Details</h3>
           <MdClose onClick={()=>setShowModal(false)} className="text-xl text-black cursor-pointer" /> 
            </di>
            <div className="flex flex-col w-full items-center mt-10"> 
                <img src={image} className="w-28 h-28 object-contain"/>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-center">{description}</p>
                <div>
                    <span className="font-bold text-lg">${price}</span>
                </div>
            </div>
        </div>
    );
}
 
export default ProductDetail;