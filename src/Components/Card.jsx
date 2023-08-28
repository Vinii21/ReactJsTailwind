import { PiPlusBold } from "react-icons/pi";
import "./style.css"
import { useContext } from "react";
import { ProductsContext } from "../Context/Products";

const Card = ({product}) => {
    const {count, setCount} = useContext(ProductsContext)
    const {title, category, description, price, image} = product;

    return (
        <div>
        <div className="bg-white relative border border-purple-300 w-60 h-48 transform hover:scale-110 hover:z-10 transition-all duration-300 ease-in rounded-2xl overflow-hidden">
            <div onClick={()=>setCount(count + 1)} className="cursor-pointer absolute right-1 top-1 z-20 bg-black w-7 h-7 rounded-2xl flex justify-center items-center">
            <PiPlusBold className="text-base text-white"/>
            </div>
            <img src={image}  className="card"/>
            <span className="absolute bottom-1 left-1 bg-white/60 rounded-2xl text-sm px-5 cursor-default">{category}</span>
        </div>
        <div className="w-48 h-7 flex justify-between p-2">
            <span className="text-base">{title}</span>
            <span className="font-bold text-lg">${price}</span>
        </div>
        </div>
    );
}
 
export default Card;