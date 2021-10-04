import React from 'react';
import { useHistory } from 'react-router';
import './SignIn.css'

const SignIn = () => {
    const history=useHistory()
    const handleLogin=()=>{
        history.push('/home')
    }
    return (
        <div className="signIn">
            
           <div>
            <form action="" className='login-form'>
            <h4>Sign in here</h4>
                <input type="email" placeholder="enter email" required/> <br /><br />
                <input type="password" placeholder="enter password" /><br />
                <br />
                <button onClick={handleLogin}>Sign in</button>

            </form>
           </div>
        </div>
    );
};

export default SignIn;