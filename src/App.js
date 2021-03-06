import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./pages/product/product-page";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
    <Router>
      <Switch>
          <Route path="/">
            <ProductPage />
          </Route>
        </Switch>
    </Router>
    );
  }
}

export default App;
