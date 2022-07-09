import React, { Component } from 'react';
import './Banner.css';
import logo from './sextant.png';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <img src={logo} alt="" height="50px" width="50px" margin=""/>
                <h1>{this.props.bannerText} </h1>
            </div>
        );
    }
}

export default Banner;