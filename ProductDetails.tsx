import React, { useState } from 'react';

interface Type {
    name: string;
    price: number;
    quantity: number;
}

const ProductDetails:React.FC=()=>{
    const [quantity, setQuantity] = useState<number>(1);

    const handleIncrement = () => {
        setQuantity(quantity+1);
    }

    const handleDecrement = () => {
        setQuantity(quantity-1);
    }

return(
    <>
    <p>clicked times {quantity}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
)
}

export default ProductDetails;