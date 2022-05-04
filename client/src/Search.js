import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Search.css';
//const url = 'http://localhost:8000/users'

const Search = () => {

    const {username} = useParams()

    const [product, setProduct] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")
    //const [isLoading, setIsLoading] = useState(true)

    const fetchProduct = async() => {
        const response = await fetch('http://localhost:8000/users')
        const data = await response.json()
        setProduct(data)
    }

    useEffect(() => {
        fetchProduct()
    }, []);

    const searchProduct = (searchValue) => {
        setSearchInput(searchValue)

        if(searchInput) { //if get a search input, check if it matches any product
            const filteredSearch = product.filter((prod) => (
                Object.values(prod).join("").toLowerCase().includes(searchValue.toLowerCase())
            ))

            setFiltered(filteredSearch) //if a match is found, return the result
        } else {
            setFiltered(product) //if no match is found, return everything
        }
    }

    return (
        <>
            <div className="wrapper">
                <input className="searchBar"
                    type="text" 
                    name="text" 
                    placeholder="Search..." 
                    onChange={(e) => searchProduct(e.target.value)}
                    // autoComplete="off"
                    
                />

                {searchInput.length > 1 ? <section className="productDisplay">
                    {filtered.map(({productID, price, quantity , name, img}) =>(
                        <article key={productID} className="box">
                            <img src={img} alt={name} title={name}/>
                            <h3>{name}</h3>
                            <p>price: {price}</p>
                            <p>quantity: {quantity}</p>
                            {/* need to add functions to buttons */}
                            <button className="cart">Cart</button>
                            <button className="buy">Buy</button>
                        </article>
                        
                    ))}
                </section>: <section className="productDisplay">
                    {product.map(({productID, price, quantity , name, img}) =>(
                        <article key={productID} className="box">
                            <img src={img} alt={name} title={name}/>
                            <h3>{name}</h3>
                            <p>price: {price}</p>
                            <p>quantity: {quantity}</p>
                            {/* need to add functions to buttons */}
                            <button className="cart">Cart</button> 
                            <button className="buy">Buy</button>
                        </article>
                    ))}
                </section>}

                 

            </div>
            

        </>
        
    )
}
 
export default Search;