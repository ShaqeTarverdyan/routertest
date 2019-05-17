import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';

const ProductsDiv = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
padding:1vw;
grid-gap:6vw;
`;
class Products extends React.Component {
    render() {
        return (
            <ProductsDiv>
                <ProductCard />
            </ProductsDiv>
        );
    }
}


export default Products;