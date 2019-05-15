import React from 'react';
import './AppStyle.css';
import Product from './Product';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

class Products extends React.Component {
    render() {
        return (
            <div className='products'>
                <Product
                    products={this.props.products}
                />
            </div>
        );
    }
}

export default Products;