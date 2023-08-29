import { createPortal } from "react-dom";
import "./style.css"

const ModalProductDetail = ({children}) => {
    return createPortal (
        <div className="modal">
            {children}
        </div>,
        document.getElementById("modal")
    );
}
 
export default ModalProductDetail;