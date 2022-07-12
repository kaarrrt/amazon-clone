import React from 'react'
import logo from './images/Amazon.jpg';
import SearchIcon from './images/search.svg';
import ShoppingBasketIcon from './images/shopping-cart.svg';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from '../src/firebase';
import "./Header.css";
function Header(props) {
    const [{basket,user,name}]=useStateValue();
    
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src={logo} />
            </Link>
            
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                <div className="header_option"  onClick={handleAuthentication}>
                    <span className="header_optionLOne">Hello,{user?name:'Guest'}</span>
                    <span className="header_optionLTwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                
                <div className="header_option">
                    <span className="header_optionLOne">Returns</span>
                    <span className="header_optionLTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLOne">Your</span>
                    <span className="header_optionLTwo">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header_basket">
                    
                    <ShoppingBasketIcon/>
                    <span className="header_optionLTwo  header_basketCount">{basket.length}</span>
                </div>
                </Link>
                
                    
            </div>
        </div>
    )
}

export default Header
