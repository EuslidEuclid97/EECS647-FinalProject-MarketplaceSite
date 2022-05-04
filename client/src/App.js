
import NavBar from './NavBar';
import Home from './Home';
import Search from './Search';
import Account from './Account';
import Cart from './Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
  //const [username, setUsername] = useState('')//User
  //const [password, setPassword] = useState('')
  //const [productID, setProductID] = useState('')//Sells
  //const [userID, setUserID] = useState('')
  //const [cartUserID, setCartUserID] = useState('')//Cart
  /*const [cartProductID, setCartProductID] = useState('')
  const [cartQuantity, setCartQuantity] = useState('')
  const [price, setPrice] = useState('')//Products
  const [prodQuantity, setProdQuant] = useState('')
  const [name, setName] = useState('')
  const [pic, setPic] = useState('')*/
   
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Routes>
            <Route exact path = "/" element = {<Home/>}></Route>
            <Route path = "/Search/:username" element = {<Search/>}></Route>
            <Route path = "/Accounts/:userID" element = {<Account/>}></Route>
            <Route path = "/Cart/:username" element = {<Cart/>}></Route>
            <Route path = "/AddItem/:userID" element = {<AddItem/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
