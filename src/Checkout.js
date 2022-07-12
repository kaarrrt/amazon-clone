import React from 'react'
import './Checkout.css';
import Ad from './images/Ad.png'
import Subtotal from './Subtotal/Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{basket,user,name},dispatch]=useStateValue();
    console.log(name)
    let cp=basket.map((product)=>{
        return(
            <CheckoutProduct id={product.id}
            title={product.title}
            rating={product.rating}
            image={product.image}
            price={product.price}/>
        )
    })
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src={Ad}/>
                <h3>Hello, 
                    {name}
                </h3>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                <div>
                    {cp}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>


        </div>
    )
}

export default Checkout
