import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { ProductsContext } from "../../Context/Products"

const Home = () => {

    const {products} = useContext(ProductsContext);

    return (
        <Layout>
            <div className="grid grid-cols-3 gap-4">
             {
                products.map((item,index)=>(
                    <Card product={item}/>
                ))
             }
            </div>
        </Layout>
    );
}
 
export default Home;