import React from 'react'
import CurrencyFormat  from "react-currency-format";
import './Subtotal.css';
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../StateProvider';
function Subtotal() {
    const history=useHistory();
    const [{basket},dispatch]=useStateValue();
    let total=null;
    for(let key in basket){
        total+=basket[key].price
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal({basket.length} items):
                        <strong>{`${value}`}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}/>
            <button className="proceed" onClick={event=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
