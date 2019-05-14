import React from 'react';
import './App.css';
import Products from './Products';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from './App';
import Header from './Header';
import ProductContent from './ProductContent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            {  id:1,name: 'name1', price: '$500' },
            {  id:2,name: 'name2', price: '$500' },
            {  id:3,name: 'name3', price: '$500' },
            {  id:4,name: 'name4', price: '$500' },
            {  id:5,name: 'name5', price: '$500' },
        ]
    }
}
  render() {
    return (
      <Router>
            <Header />
            <div>
                <Switch>
                    <Route path='/products' exact render={(props) => <Products products={this.state.products} />} />
                    <Route path='/product/:id'  render={(props) => <ProductContent {...props} products={this.state.products}/>}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
