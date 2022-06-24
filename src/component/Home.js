import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { addToCart,removeToCart } from '../services/Actions/action';
export default function Home()
{
    const Selector = useSelector((state) => state.cardItems.cardData);
    const Dispatch = useDispatch();
 
    return(
        <div style={{backgroundColor:"#7ae4dc"}}>
            <img src="./image/cart.png" style={{position:"absolute", top:"3%", right:"2%"}} alt="cart" width="60" height="50" />
            <span className="color">{Selector}</span>
            <br/>
            <h1 style={{color:"red"}}> Home Component </h1>
            <div>
                <img src="./image/image.png" alt="image" width="380" height="400"/>
                <div>
                <span>Latest Smart Phone</span><br/><br/>
                    <span >cost is &#8377; 10,000 </span><br/><br/>
                    
                    <button onClick={()=>{Dispatch(addToCart())}} >Add to Checkout</button> &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>{Dispatch(removeToCart())}}>Remove To Cart</button>
                </div>
                <br/>
                <br/> 
                <br/>
            </div>
        </div>
    );
}