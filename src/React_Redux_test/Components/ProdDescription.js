import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const DescriptionPage = styled.div`
display:grid;
width:50%;
height:60vw;
border:1px solid  #4d4d4d;
margin:4vw;
justify-items:center;
`;
const ImageDiv = styled.div`
width:100%;
background-color:grey;
height:30vw;
`;
const ContentDiv = styled.div`
width:100%;
display:grid;
grid-template-columns:50% 50%;
grid-template-rows:20% 80%;
height:20vw;
`;
const Name = styled.div`
font-size:2vw;
text-align:center;
`;
const Price = styled.div`
font-size:2vw;
text-align:center;
`;
const Description = styled.div`
width:200%;
overflow:scroll;
`;
const P = styled.p`
font-size:1.5vw;
padding-left:3vw;
padding-right:3vw;
`;
const Button = styled.button`
width:50%;
margin-bottom:2vw;
border-radius:0.5vw;
font-size:2vw;
`;
class ProductDescription extends React.Component {
    redirect = () => {
        return <Redirect to='/products' />;
    }
    getProduct = () => {
        const { params } = this.props.match;
        const product = this.props.prods.filter(prod => prod.id == params.id)[0];
        return product;
    }
    render() {
        const product = this.getProduct()
        return (
            product ?
                <DescriptionPage>
                    <ImageDiv>
                        <img
                            src={product.image}
                            alt='car'
                            style={{ width: '100%', height: '30vw' }}
                        />
                    </ImageDiv>
                    <ContentDiv>
                        <Name>{product.name}</Name>
                        <Price>{product.price}</Price>
                        <Description><P>{product.description}</P></Description>
                    </ContentDiv>
                    <Button onClick={() => this.props.deleteProduct(product.id)}>Delete</Button>
                </DescriptionPage> : this.redirect()
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
        deleteProduct: (id) => { dispatch({ type: 'DELETE_PRODUCT', deletedProductId: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);