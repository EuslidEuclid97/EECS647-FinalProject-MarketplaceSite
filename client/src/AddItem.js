
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import './AddItem.css'

const AddItem = ()=> {
    
    const {username} = useParams()

    const [users, setUsers] = useState('')
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const submitItem = () => {
        var lastID = 0
        var url
        fetch('http://localhost:8000/users').then(response => response.json()).then(data => {
            setUsers(data);   
        })
        {users && users.map((user) => {
            if(user.username === username){
                user.productID = lastID++
                user.name = product
                user.price = price
                user.quantity = 1
                url = 'http://localhost:8000/users/' + user.id
                fetch(url, {
                method: 'PUT', 
                body: JSON.stringify(user, {img : image}),
                headers: {'Content-Type': 'application/json'}
            }).then(() => {
                    alert("Item added!")
                    console.log(users); //maybe display something here
                })
            }
            lastID = user.productID
        })}
    }

    return (  
        <div className="popup">
            <div className="popup-inner">
            <form>
                <h1>Please enter new item information</h1>
                <label>Product Name</label>
                <input
                type = "text"
                required
                value = {product}
                onChange = {(e) => setProduct(e.target.value)}
                >
                </input>
                <label>Price</label>
                <input
                type = "text"
                required
                value = {price}
                onChange = {(e) => setPrice(e.target.value)}
                >
                </input>
                <label>Image URL</label>
                <input
                type = "text"
                required
                value = {image}
                onChange = {(e) => setImage(e.target.value)}
                >
                </input>
                <button onSubmit = {submitItem}>Add Item</button>
            </form>
            </div>
        </div>
    );
}
 
export default AddItem;