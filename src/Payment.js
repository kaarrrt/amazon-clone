import React,{useState,useEffect} from 'react'
import {useStateValue} from './StateProvider';
import './Payment.css'
import axios from './axios';
import {Link,useHistory} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
function Payment() {
    const[{user,basket,name}]=useStateValue();
    const history=useHistory();
    const[error,setError]=useState();
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState(false);
    const[disabled,setDisabled]=useState(true);
    const[clientSecret,setClientSecret]=useState(true);
    const stripe=useStripe();
    const elements=useElements();
    let total=null;
    for(let key in basket){
        total+=basket[key].price}
    useEffect(() => {
        let total=null;
        for(let key in basket){
        total+=basket[key].price}
        const getClient=async()=>{
            const response=await axios({
                method:'post',
                url:`/payment/create?total=${total*100}`
            })
            setClientSecret(response.data.clientSecret);
        }
        getClient();
    }, [basket])
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload= stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace('/orders');
        })
    }
    const handleChange=(event)=>{
        setDisabled(event.empty);
        setError(event.error?event.error.message:' ');
    }
    return (
        <div className="payment">
            <div className='payment_container'>
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length}items</Link>)
                </h1>
                <div className='payment_section'>
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?user.email:'Please Login'}</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item=>(
                            <CheckoutProduct id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                        )            
                        )}
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_price">
                            <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                        <p>
                                            Total({basket.length} items):
                                            <strong>{`${value}`}</strong>
                                        </p>
                                    </>
                                )}
                                decimalScale={2}
                                value={total}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}/>
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing?<p>Processing</p>:"Buy now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
                                }

export default Payment
