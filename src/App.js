import React,{useEffect}from 'react';
import './App.css';
import Header from '../src/Header'; 
import Home from '../src/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from '../src/Checkout';
import Login from '../src/Login';
import Payment from './Payment';
import {auth} from "./firebase";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import {useStateValue} from './StateProvider';
const promise=loadStripe('pk_test_51INv8tIeTWDkEzfhtc0DeVyErIiNSwKjN9R1J0hE8KQ8LE4OxIiQYT5eALLy4AkeKaU2VWaRUVWwaB0TLk8BfJdW00PBUYwrIw');
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser){
        dispatch({type:'SET',user:authUser})
      }
      else{
        dispatch({type:'SET',user:null})
      }
    })
  }, [])
  return (
   
      <Router>
         <div className="app">
           <Switch>
             <Route path="/login">
               <Login/>
             </Route>
              <Route path="/checkout">
                <Header/>
                <Checkout/>
              </Route>
              <Route path="/payment">
                <Header/>
                <Elements  stripe={promise}>
                <Payment/>
                </Elements>
                
              </Route>
             <Route path="/">
              <Header/>
              <Home/>
              </Route>
              
           </Switch>

        </div>
      </Router>
      
    
  );
}

export default App;
