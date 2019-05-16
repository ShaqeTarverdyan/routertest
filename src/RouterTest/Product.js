import React from 'react';
import './AppStyle.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

class Product extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.products.map(product =>
                        <Link to={'product/' + product.id}>
                            <div
                                key={product.id}
                                className='productCard'
                            >
                                <p>productName --- {product.name}</p>
                                <p>productPrice --- {product.price}</p>
                                <p>description ---{product.description}</p>
                            </div>
                        </Link>

                    )
                }
            </>
        );
    }
}

export default Product;