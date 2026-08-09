import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import { getProductById } from "../services/productService";
import ProductCard from "./ProductCard";
function ProductDetails(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const data=await getProductById(id);
                setProduct(data);
            }
            catch (error){
                setError("Unable to load product");
            }
            finally { setLoading(false); }
        };
        fetchProduct();
    },[id]);
    if (loading){
        return <p>Loading product...</p>; 
    } 
    if (error) {
        return <p>{error}</p>;
    }
    return(
        <div>
            <ProductCard key={product.id} product={product} />
        </div>
    );
}
export default ProductDetails;