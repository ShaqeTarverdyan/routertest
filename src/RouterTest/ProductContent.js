import React from 'react';
import './AppStyle.css';
import { Route, BrowserRouter as Router, Redirect,Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductContent extends React.Component {
    // deleteProduct = () => {
    //     this.props.deleteProduct(this.props.prods.id);
    // }
    redirect = () => <Redirect to='/products'/>

    getProduct = () => {
        const {params} = this.props.match;
        const product = this.props.prods.filter(product => product.id == params.id)[0];
        return product;
    }
    render() {    
        const product = this.getProduct();
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
                <button onClick={() => this.props.deleteProduct(product.id)}>Delete</button>
            </div> :  this.redirect()
             
        );
    }
}

const mapStateToProps = state => {
    return {
        prods: state.products
    };
}
const mapDispatchToProps  = dispatch => {
    return {
        deleteProduct:(id) => dispatch({type:'DELETE_PRODUCT',deletedItemId:id }),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContent);




// const NewProductAction = {
//     type: "DELETE_PRODUCT",
//     payload: {
//         id: "Vahe",
//     }
// };


// const store = {
//     products: []
// }

// const reducer = function(NewProductAction) {
//     if (NewProductAction.type == 'NEW_PRODUCT') {
//         store.products.push([name: NewProductAction.payload.name]);
//     }
// }