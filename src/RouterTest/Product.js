import React from 'react';
import './AppStyle.css';
import Products from './Products';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

class Product extends React.Component {
    render() {
        let falseId = 0;
        return (
            <>
                {
                    this.props.products.map((product, index) =>
                        <Link to={'product/' + (index +1)}>
                            <div
                                falseId={falseId++}
                                key={product.index}
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