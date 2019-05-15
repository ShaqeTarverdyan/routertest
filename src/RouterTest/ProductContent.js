import React from 'react';
import './AppStyle.css';
import { Route, BrowserRouter as Router, Redirect,Switch, Link } from 'react-router-dom';

class ProductContent extends React.Component {
    redirect = () => <Redirect to="/products" />
    
    onDelete = () => {
        const product = this.getProduct();
        this.props.onDelete(product.id);
       
    }
    getProduct = () => {
        const {params} = this.props.match;
        const product = this.props.products.filter(product => product.id == params.id)[0];
        return product;
    }
    render() {    
        const product = this.getProduct();
        console.log('product', product);
        return (
            product ?
            <div className='produactContent'>
                <p>
                    {product.name}
                </p>
                <p>
                    {product.price}
                </p>
                <p className='description'> 
                    {product.description}
                </p>
                <button onClick={this.onDelete}>Delete</button>
            </div> :  this.redirect()
             
        );
    }
}

export default ProductContent;