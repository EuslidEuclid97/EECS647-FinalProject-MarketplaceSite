
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import './AddItem.css'
import { Axios } from "axios";

const AddItem = ()=> {
    
    const {userID} = useParams()

    const [products, setProducts] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const submitItem = () => {
        const newQuant = 0;
        const foundID = 0
        Axios.get('http://localhost:3001/api/products/select').then((response) => {
                console.log(response.data)
                setProducts(response.data)
            })
        products.map((prod) => {
            if(prod.Price === price && prod.Name === name && prod.Pic === image){
                newQuant = prod.Quantity+1
                foundID = prod.ProductID
            }
        })
        Axios.post('http://localhost:3001/api/products/insert', {
            Price: price,
            Name: name,
            Quantity: newQuant, 
            Pic: image
        })
        Axios.post('http://localhost:3001/api/sells/insert', {
            ProductID: foundID,
            UserID: userID
        }).then(() => {
            alert("Item added")
        })
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
                value = {name}
                onChange = {(e) => setName(e.target.value)}
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