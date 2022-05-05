//import Search from './Search'

import {Link} from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>UBuy.com</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Search">Search</Link>
                <Link to="/Accounts/:username">Account</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;