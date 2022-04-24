
import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route path = "/">
              <Home/>
            </Route>
            <Route path = "/Search">
              <Search/>
            </Route>
            <Route path = "/Account">
              <Account/>
            </Route>
            <Route path = "/Account/Cart">
              <Cart/>
            </Route>
            <Route path = "/Search/Item">
              <Item/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
