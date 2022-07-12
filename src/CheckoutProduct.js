import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider';
function CheckoutProduct(props) {
    const [{basket},dispatch]=useStateValue();
    const removeProduct=()=>{
       dispatch({type:'REMOVE',id:props.id})
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={props.image}/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{props.title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(props.rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeProduct}>Remove From Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
