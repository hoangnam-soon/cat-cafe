import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Item from './pages/Item';
import Petitem from "./pages/Petitem";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Detailsanpham from './pages/Detailsanpham';
import Detailphukien from "./pages/Detailphukien";
import ScrollToTop from './hook/ScrollToTop'


function App() {

return (
  <Router>
  <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/Store">
          <Store/>
        </Route>
        <Route path ="/Item">
          <Item/>
        </Route>
        <Route path ="/Pet-item">
          <Petitem/>
        </Route>
        <Route path ="/Blog">
          <Blog/>
        </Route>
        <Route path ="/Cart">
          <Cart/>
        </Route>
        <Route path ="/Detail-item">
          <Detailsanpham/>
        </Route>
        <Route path ="/Detail-pet-item">
          <Detailphukien/>
        </Route>


      </Switch>
  </Router>
);
}

export default App;

