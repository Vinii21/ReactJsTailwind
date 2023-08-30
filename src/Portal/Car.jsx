import { useContext } from "react";
import { ProductsContext } from "../Context/Products";

const Car = () => {

    const {addCar} = useContext(ProductsContext)

    return (
        <div className="w-64 h-96 bg-[#18161665] backdrop-blur-[5px] rounded-2xl fixed top-5 right-5 z-[100]">
            {
                addCar.map((item)=>(
                    <p>{item.title}</p>
                ))
            }
        </div>
    );
}
 
export default Car;