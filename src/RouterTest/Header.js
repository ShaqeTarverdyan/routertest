import React from 'react';
import './AppStyle.css';
import Products from './Products';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return(
            <div className='header'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/addProduct'>New Product</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;