const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>Welcome to UBuy.com!</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/search">Search</a>
                <a href="/account">Account</a>
                <a href="/item">ItemSample</a>
                <a href="/cart">Cart</a>
            </div>
        </nav>
    );
}
 
export default NavBar;