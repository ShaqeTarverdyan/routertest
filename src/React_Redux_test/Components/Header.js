import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const MenuDiv = styled.div`
`;
const Ul = styled.ul`
display:grid;
grid-template-columns:repeat(5, 20%);
list-style-type:none;
outline:none;
font-size:2vw;
`;
const Li = styled.li`
cousor:pointer;
`;
class Header extends React.Component {
    render() {
        return(
            <>
                <MenuDiv>
                    <Ul>
                        <Li>
                            <Link to='/'>Home</Link>
                        </Li>
                        <Li>
                            <Link to='/products'>Products</Link>
                        </Li>
                        <Li>
                            <Link to='/addProduct'>AddProduct</Link>
                        </Li>
                        <Li>
                            <Link to='/news'>News</Link>
                        </Li>
                        <Li>
                            <Link to='/contact'>Contact</Link>
                        </Li>
                    </Ul>
                </MenuDiv>
            </>
        );
    }
}

export default Header;