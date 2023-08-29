import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../home';
import MyAccount from "../myAccount";
import MyOrder from "../myOrder";
import MyOrders from "../myOrders";
import SingIn from "../singIn";
import NotFound from "../notFound";
import './App.css'
import Navbar from '../../Components/Navbar';
import ModalProductDetail from "../../Portal/ModalProductDetail";
import ProductDetail from '../../Portal/ProductDetail';

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
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <ModalProductDetail>
        <ProductDetail />
      </ModalProductDetail>
    </BrowserRouter>
  )
}

export default App
