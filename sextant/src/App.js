import React, { Component } from 'react';
import AddressFinder from './AddressFinder';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exihbit';


class App extends Component {
    render() {
        return (
          <div className="App">
          <Banner bannerText="Sextant" />
          <Exhibit name="Public IPv4 Address">
              <AddressFinder url='https://api.ipify.org?format=json' />
          </Exhibit>
          <Exhibit name="Public IPv6 Address">
              <AddressFinder url='https://api64.ipify.org?format=json' />
          </Exhibit>
      </div>
        );
    }
}

export default App;
