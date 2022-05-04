import { useEffect, useState } from "react";
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([])

    //need to fecth from mysql Cart table 
    const fetchCart = async() => {
        const response = await fetch('http://localhost:8000/users')
        const data = await response.json()
        setCart(data)
    }

    useEffect(() => {
        fetchCart()
    }, []);

    return (
        <>
        <div className="wrapper">
            <section className="cartDisplay">
                {cart.map(({productID, price, quantity , name, img}) =>(
                    <article key={productID} className="box">
                        <img src={img} alt={name} title={name}/>
                        <h3>{name}</h3>
                        <p>price: {price}</p>
                        <p>quantity: {quantity}</p>
                        {/* need to add functions to button */}
                        <button className="buyCart">Buy</button>
                    </article>
                    
                ))}
            </section>
        </div>
        
        
        </>
    )
    

}

export default Cart;