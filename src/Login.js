import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn= () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    
    return (
        <div className="login">
            <div className="login__container">
            <img
                className="whatsapp__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png"
                alt=""
            />
            <div className="login__text">
                <h2>Sign In to Whatsapp</h2>
            </div>

            
            <Button onClick={signIn}>
                <img className="google__image" src= "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png"
                alt="" 
                />
                Sign-In with Google
            </Button>
            
            </div>
        </div>
    )
}

export default Login
