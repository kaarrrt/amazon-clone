import React from 'react'
import Book from '../src/images/Book.png';
import {useStateValue} from './StateProvider';
import './Product.css';
function Product(props) {
    const[{basket},dispatch]=useStateValue();
    const addtoBasket=()=>{
        dispatch ({type:'ADD',item:{id:props.id,title:props.title,image:props.image,price:props.price,rating:props.rating}});
    }
    return (
        <div className="product">
            <div className="productInfo">
                <p>{props.title}</p>
                <p className="price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="rating">
                    {Array(props.rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img src={Book}/>
            <button onClick={addtoBasket}>Add to basket</button>
        </div>
    )
}

export default Product
