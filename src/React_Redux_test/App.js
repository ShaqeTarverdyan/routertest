import React from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import AddProduct from './Components/AddProduct';
import News from './Components/News';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ProductDescription from './Components/ProdDescription';
import ProductCard from './Components/ProductCard';

import styled from 'styled-components';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";

const AppDiv = styled.div`
height:100vw;
display:grid;
grid-template-rows:20% 60% 20%;
background-color: #e6e6e6;
 `;
const HeaderDiv = styled.div`
background-color:#b3e6ff;
height:10vw;
 `;
const ContentDiv = styled.div`
margin-top:-10vw;
height:70vw;
overflow: scroll;
 `;
 const FooterDiv = styled.div`
height:20vw;
background-color: #333333;
 `;
class React_Redux_test_App extends React.Component {
    render() {
        return (
            <AppDiv>
                <Router>
                    <HeaderDiv><Header /> </HeaderDiv>

                    <ContentDiv>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/products' component={Products} />
                            <Route path='/addProduct' component={AddProduct} />
                            <Route path='/news' component={News} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/product/:id' component={ProductDescription} />
                            <Route path='/product/:id' component={ProductCard}/>
                        </Switch>
                    </ContentDiv>
                    <FooterDiv> 
                        <Footer /> 
                    </FooterDiv>
                </Router>
            </AppDiv>
        );
    }
}
export default React_Redux_test_App;