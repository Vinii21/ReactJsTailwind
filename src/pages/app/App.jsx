import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../home';
import MyAccount from "../myAccount";
import MyOrder from "../myOrder";
import MyOrders from "../myOrders";
import SingIn from "../singIn";
import NotFound from "../notFound";
import './App.css'
import Navbar from '../../Components/Navbar';
import Modal from "../../Portal/Modal";
import ProductDetail from '../../Portal/ProductDetail';
import { useContext } from 'react';
import { ProductsContext } from '../../Context/Products';

const AppRoutes = () => {
  let routes = useRoutes([
    {path:"/", element: <Home />},
    {path:"/my-account", element: <MyAccount />},
    {path:"/my-order", element: <MyOrder />},
    {path:"/my-orders", element: <MyOrders />},
    {path:"/sing-in", element: <SingIn />},
    {path:"/*", element: <NotFound />}
  ]);

  return routes;
}

const App = () => {
  const {showModal} = useContext(ProductsContext)
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      { showModal &&
        <Modal>
          <ProductDetail />
        </Modal>
      }
    </BrowserRouter>
  )
}

export default App
