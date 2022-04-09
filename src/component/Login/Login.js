import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle, user } = useFirebase();
    return (
        <div>
            <h3>please log in</h3>

            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>

            <form action="">
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <input type="submit" name="" id="" value='LogIn' />
            </form>
        </div>
    );
};

export default Login;