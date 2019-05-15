import React from 'react';
import './App.css';
import Product from './Product';

class Products extends React.Component {

    render() {
        return (
            <div>
                <Product
                    products={this.props.products}
                />
            </div>
        )
    }
}
export default Products;