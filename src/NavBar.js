import {Link} from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>UBuy.com</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/account">Account</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;