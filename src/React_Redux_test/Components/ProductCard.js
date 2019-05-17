import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

const ProductCardDiv = styled.div`
display:grid
border:2px solid #001f33;
border-radius:0.5vw;
height:30vw;
justify-items:center;
`;
const ImageDiv = styled.div`
width:100%;
background-color:grey;
height:18vw;
`;
const ContentDiv = styled.div`
width:100%;
display:grid;
grid-template-columns:50% 50%;
`;
const Button = styled.button`
width:100%;
height:3vw;
border-radius:0.5vw;
cursor:pointer;
justify-items: center;
`;
const Name = styled.div`
font-size:2vw;
text-align:center;
`;
const Price = styled.div`
font-size:2vw;
text-align:center;
`;

class ProductCard extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.prods.map(product => 
                        <ProductCardDiv key={product.id}>
                        <ImageDiv>
                            <img 
                                src={product.image} 
                                alt='car'
                                style={{width:'100%', height:'18vw'}}
                            />
                        </ImageDiv>
                        <ContentDiv>
                            <Name>{product.name}</Name>
                            <Price>{product.price}</Price>
                        </ContentDiv>
                        <Link to={'/product/' + product.id}>
                             <Button>Full Info</Button>
                        </Link>
                    </ProductCardDiv>
                    )
                
                }  
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        prods: state.products,
        prod: state.product
    }
}

export default connect(mapStateToProps)(ProductCard);