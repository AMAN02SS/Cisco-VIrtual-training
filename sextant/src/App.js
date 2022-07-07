import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exihbit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="exhibit! 1"></Exhibit>
                <Exhibit name="exhibit! 2"></Exhibit>
                <Exhibit name="exhibit! 3"></Exhibit>
            </div>
        );
    }
}

export default App;
