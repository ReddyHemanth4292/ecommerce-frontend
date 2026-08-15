import { useEffect, useState } from "react";
import { getCart } from "../services/cartService";

function cart(){
    const [cart,setCart]= useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    useEffect(()=>{
        const fetchCart = async()=>{
            try{
                const data=await getCart();
                setCart(data);
            }catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        };
        fetchCart();
    },[]);
    if(loading){
        return <p>Loading cart...</p>
    }
    if(error){
        return <p>{error}</p>;
    }
    return(
        <div>
            <h2>My Cart</h2>
            <pre>
                {JSON.stringify(cart, null, 2)}
            </pre>
        </div>
    )
}

export default cart;