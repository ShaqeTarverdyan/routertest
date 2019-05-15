import React from 'react';
import './AppStyle.css';
import Products from './Products';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

class Footer extends React.Component{
    render() {
        return(
            <div className='footer'>
                Footer
            </div>
        );
    }
}

export default Footer;