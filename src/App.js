import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      epoch: null
    }

    this.getLocation = this.getLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    axios({
    url: '',
    baseURL: 'https://www.googleapis.com/geolocation/v1/geolocate?key=',
    method: 'POST'
   }).then((res) => {
    console.log(res);
      this.setState({
        lat: res.data.location.lat,
        lng: res.data.location.lng
      })
      console.log(this.state.lat, this.state.lng);
   }).then(() => {
        this.getWeather();
    })
  }

  getWeather() {
    axios({
    url: '',
    baseURL: `https://api.darksky.net/forecast//${this.state.lat},${this.state.lng}`,
    method: 'GET'
   }).then((res) => {
    console.log(res);
      console.log()
   })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
