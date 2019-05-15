import React from 'react';
import './AppStyle.css';
import Products from './Products';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

class About extends React.Component{
    render() {
        return(
            <div className='about'>
                About
            </div>
        );
    }
}

export default About;