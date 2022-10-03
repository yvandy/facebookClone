import React from 'react'
import "./Login.css";
import { auth, authProvider } from './firebase';
import { signInWithPopup, getAuth } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        signInWithPopup(auth, authProvider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                console.log(result.user);
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' alt='' />

                <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
            </div>
            <button type='submit' onClick={signIn}> Sign In</button>
        </div>
    )
}

export default Login