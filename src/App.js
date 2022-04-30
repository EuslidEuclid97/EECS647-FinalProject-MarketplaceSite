
import NavBar from './NavBar';
import Home from './Home';
import Search from './Search';
import Account from './Account';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Routes>
            <Route exact path = "/" element = {<Home/>}></Route>
            <Route path = "/Search" element = {<Search/>}></Route>
            <Route path = "/Accounts/:id" element = {<Account/>}></Route>
            {/*<Route path = "/Account/Cart" element = {<Cart/>}></Route>*/}
            {/*<Route path = "/Search/Item" element = {<Item/>}></Route>*/}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
