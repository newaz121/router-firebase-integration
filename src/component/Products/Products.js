import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Knock Knock ! WHo is there</h2>
            <h5>{user ? user.displayName : 'Voooooottt'}</h5>
        </div>
    );
};

export default Products;