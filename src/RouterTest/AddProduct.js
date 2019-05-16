import React from 'react';
import './AppStyle.css';
import { connect } from 'react-redux';


class AddProduct extends React.Component {

    updateProduct = (event) => {
        this.props.updateProduct(event);
    }

    addProduct = (event) => {
        event.preventDefault();
        this.props.addProduct(event);
    }

    render() {
        return (
            <div className='addProductdiv'>
                <form onSubmit={this.addProduct} className='addProductForm'>

                    <input
                        placeholder='Product Name'
                        onChange={this.updateProduct}
                        name='name'
                        value={this.props.prod.name}

                    />
                    <input
                        placeholder='Price'
                        onChange={this.updateProduct}
                        name='price'
                        value={this.props.prod.price}
                    />
                    <textarea
                        name='description'
                        onChange={this.updateProduct}
                        rows='15'
                        cols='80'
                        placeholder='Add description...'
                        value={this.props.prod.description}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prods: state.products,
        prod: state.product
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateProduct: (event) => dispatch({ type: 'UPDATE_PRODUCT', payload: event }),
        addProduct:() => dispatch({type:'ADD_PRODUCT'})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);