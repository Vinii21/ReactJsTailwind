import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { ProductsContext } from "../../Context/Products"

const Home = () => {

    return (
        <Layout>
            <div className="grid grid-cols-3 gap-4">
             <Card />
            </div>
        </Layout>
    );
}
 
export default Home;