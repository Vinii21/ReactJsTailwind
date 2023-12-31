import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../Context/Products";
import Modal from "../Portal/Modal";
import Car from "../Portal/Car";

const Navbar = () => {
  const {count, showCar, setShowCar} = useContext(ProductsContext)
  const activeStyle = "underline underline-offset-4";

  return (
    <>
      <nav className="w-full h-14 z-20 fixed top-0 flex flex-row justify-between items-center px-3 backdrop-blur-sm bg-white/30">
        <ul className="flex flex-row">
          <li className="mx-2">
            <NavLink className={`font-bold text-lg`} to="/">
              Shopi
            </NavLink>
          </li>
          <li className="mx-2 ml-20">
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              {" "}
              All
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/clothes" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Clothes</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Electronics</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Toys</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/others" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Others</NavLink>
          </li>
        </ul>
        <ul className="flex flex-row">
          <li className="mx-2 text-black/60">Correo@correo</li>
          <li className="mx-2">
            <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : undefined)}>My orders</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : undefined)}>My Account</NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/sing-in" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Sing In</NavLink>
          </li>
          <li className="mx-2 cursor-pointer" onClick={()=>{setShowCar(!showCar); console.log(showCar)}}>🛒{count}</li>
        </ul>
      </nav>
      { showCar &&
        <Modal>
          <Car />
        </Modal>
      }
    </>
  );
};

export default Navbar;
