import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>This is home</h1>
            <p>Current user :{user ? user.displayName : 'No body'}</p>
        </div>
    );
};

export default Home;