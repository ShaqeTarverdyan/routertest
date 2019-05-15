import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Product = (props) => {
        return(
            <div className='main'>
                    {props.products.map((product,index) =>
                        <Link to={'/product/'  + product.id}>
                            <div
                                key={product.name}
                                className='productCard'
                            >
                                <p>productName-<strong>{product.name}</strong></p>
                                <p>price-<strong>{product.price}</strong></p>
                            </div>
                        </Link>
                    )}
                </div>
        );
    }

export default Product;