import { useParams } from "react-router-dom";
function ProductDetails(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    return (
        <div>
            <h1>Product Details</h1>

            <p>Product ID: {id}</p>
        </div>
    );
}
export default ProductDetails;