import { MdClose } from "react-icons/md";

const ProductDetail = () => {
    return (
        <div className="fixed top-14 right-0 rounded-lg border border-black w-[360px] h-[calc(100vh-66px)]">
           <di className="w-full flex flex-row justify-between">
            <h3 className="text-base font-bold">Details</h3>
           <MdClose className="text-xl text-white cursor-pointer" /> 
            </di>
        </div>
    );
}
 
export default ProductDetail;