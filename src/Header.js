import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='products'>Products</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;