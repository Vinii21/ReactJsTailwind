import { PiPlusBold } from "react-icons/pi";
import "./style.css"

const Card = (product) => {

    const {title, category, description, price, image} = product

    return (
        <div>
        <div className="relative border border-purple-300 w-60 h-48 transform hover:scale-110 hover:z-10 transition-all duration-300 ease-in rounded-2xl overflow-hidden">
            <div className="cursor-pointer absolute right-1 top-1 z-20 bg-black w-7 h-7 rounded-2xl flex justify-center items-center">
            <PiPlusBold className="text-base text-white"/>
            </div>
            <img src="/jordan.webp"  className="card"/>
            <span className="absolute bottom-1 left-1 bg-white/60 rounded-2xl text-sm px-5 cursor-default">Shoes</span>
        </div>
        <div className="w-48 h-7 flex justify-between p-2">
            <span className="text-base"></span>
            <span className="font-bold text-lg">$155</span>
        </div>
        </div>
    );
}
 
export default Card;