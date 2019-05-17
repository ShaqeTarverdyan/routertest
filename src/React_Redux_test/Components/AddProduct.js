import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Files from 'react-files'

const AddProductDiv = styled.form`
display:grid;
width:50%;
height:40vw;
border:2px solid #666600;
background-color:#ffffb3;
padding:3vw;
margin:3vw;
border-radius:0.5vw;
`;
const Input = styled.input`
width:80%;
height:4vw;
border:1px solid #666600;
border-radius:0.5vw;
outline:none;
padding-left:3vw;
`;
const Textarea = styled.textarea`
width:80%;
height:20vw;
border:1px solid #595959;
border-radius:0.5vw;
outline:none;
padding-left:3vw;
padding-top:2vw;
`;
const Button = styled.button`
width:87%;
margin-bottom:3vw;
border:1px solid #595959;
border-radius:0.5vw;
outline:none;
cursor:pointer;
font-size:2vw;
font-weight:500;
`;
class AddProduct extends React.Component {
    addProduct = (event) => {
        event.preventDefault();
        this.props.addProduct(event);
    }
    addImage = (files) => {
        console.log(files);
    }
    fileUploadError = () => {

    }
    render() {
        return (
            <AddProductDiv onSubmit={this.addProduct}>

                <Input
                    name='name'
                    placeholder='Name'
                    value={this.props.prod.name}
                    onChange={this.props.updateProduct}
                />
                <Input
                    name='price'
                    placeholder='Price'
                    value={this.props.prod.price}
                    onChange={this.props.updateProduct}
                />
                <Textarea
                    name='description'
                    placeholder='Description'
                    cols='40'
                    rows='18'
                    value={this.props.prod.description}
                    onChange={this.props.updateProduct}
                />
                <div>
                    <Files
                        onChange={this.addImage}
                        accepts={['image/png','image/jpg', '.pdf', 'audio/*']}
                        multiple
                        maxFiles={1}
                        maxFileSize={1000000}
                        minFileSize={0}
                        clickable
                    >
                    Please click to upload the image
                    </Files>

                </div>

                <Button>Add</Button>
            </AddProductDiv>
        );
    }
}
const mapStateToProps = state => {
    return {
        prods: state.products,
        prod: state.product
    }
}
const dispatchStateToProps = dispatch => {
    return {
        updateProduct: (event) => { dispatch({ type: 'UPDATE_PRODUCT', payload: event }) },
        addProduct: () => { dispatch({ type: 'ADD_PRODUCT' }) }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(AddProduct);