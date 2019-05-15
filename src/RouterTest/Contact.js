import React from 'react';
import './AppStyle.css';
import Products from './Products';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

class Contact extends React.Component{
    render() {
        return(
            <div className='contact'>
                Contact
            </div>
        );
    }
}

export default Contact