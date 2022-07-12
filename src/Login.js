import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import {auth} from '../src/firebase';
import './Login.css';
import { useStateValue } from './StateProvider';
function Login() {
    const [{name},dispatch]=useStateValue();
    const[Email,SetEmail]=useState('');
    const[Password,SetPassword]=useState('');
    const history=useHistory();
    const signIn=(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(Email,Password).then(
            (auth)=>{
                if(auth){
                    history.push('/');
                }
            }
        ).catch(error=>alert(error.messge))

    }
    const register=(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(Email,Password).then((auth)=>{
            if(auth){
                history.push('/');
            }
        }).catch(error=>alert(error.messge))
    }
    const emailHandler=(event)=>{
        SetEmail(event.target.value);
    }
    const passwordHandler=(event)=>{
        SetPassword(event.target.value);
    }
    const nameHandler=(event)=>{
        event.preventDefault();
        dispatch({type:'NAME',name:event.target.value})
    }
    return (
        <div className="login">
                <div className="login_container">
                    
                        <h1>Sign-in</h1>
                    <form>
                        <h5>Nickname</h5>
                        <input type="text" onChange={(event)=>nameHandler(event)}></input>
                        <h5>Email Address</h5>
                        <input type="email" onChange={(event)=>emailHandler(event)}></input>
                        <h5>Password</h5>
                        <input type="password" onChange={event=>passwordHandler(event)}></input>
                        <button type="submit" className="login_signIn" onClick={signIn}>Sign in</button>
                    </form>
                    <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    Need help?
                    </p>
                    <button className="login_register" onClick={register}>Create Your Amazon Account</button>

                </div>
        </div>
    )
}

export default Login
