import React from 'react';
import './App.css';


class ProductContent extends React.Component
{
    render() {
        const { params } = this.props.match;
        return (
            <h1>{this.props.products.filter(product => product.id == params.id)[0].name}</h1>
        );
    }
}
export default ProductContent;