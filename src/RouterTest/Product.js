import React from 'react';
import './AppStyle.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { connect }  from 'react-redux'; 

class Product extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.prods.map(product =>
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
const mapStateTOProps = state => {
    return {
        prods:state.products
    }
}
export default connect(mapStateTOProps)(Product);