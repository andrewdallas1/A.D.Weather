import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';
import Currently from './components/currently';
import Hourly from './components/hourly';

import {
  Grid, Row, Col, Button, Navbar, FormGroup, FormControl
} from 'react-bootstrap';



class App extends Component {
  constructor() {
    super();
    this.state = {
      zipCode: "",
      lat: "",
      lng: "",
      epoch: "",
      time: moment().format('hh:mm a'),
      current: "",
      hourly: "",
      daily: "",
      count: 0,
    }

    this.getInfo = this.getInfo.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.askForLocation = this.askForLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.askForLocation();
    this.setTime();
  }

  askForLocation() {

    return(
      <Navbar inverse fixedTop>
      <Row>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><h4>A.D. Weather</h4></a>
          </Navbar.Brand>

        </Navbar.Header>
          <Navbar.Form center className="options">
          <form className="zipInput" onSubmit={this.getLocation}>
            <Button className="gps" type="button">Use GPS</Button>{' '} Or {' '}
              <FormGroup bsSize="small">
                <FormControl className="zip" type="text" placeholder="Enter Zip" onChange={this.handleChange}/>
              </FormGroup>

              <Button type="submit" className="zipSubmit">Go</Button>
          </form>

          </Navbar.Form>

          <Navbar.Text pullRight className="time">
            <h4 pullRight>{this.state.time}</h4>
          </Navbar.Text>

          </Row>
      </Navbar>
    )
  }

  setTime() {
    this.setState({
      time: moment().format('hh:mm a')
    })
    setTimeout(this.setTime, 1000);
  }


  shouldComponentUpdate() {
    if(this.state.count === 1) {
      this.setState({
        count: 0
      })
      return true;
    } else {
      return false;
    }
  }

  handleChange(event) {
    this.setState({
      zipCode: event.target.value
    })
  }

  getLocation(e) {
    e.preventDefault();
      axios({
        url: '',
        baseURL: `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.zipCode}&key=`,
        method: 'POST'
      }).then((res) => {
          this.setState({
            lat: res.data.results[0].geometry.location.lat,
            lng: res.data.results[0].geometry.location.lng,
            count: 1
          })
      }).then(() => {
         this.getInfo();
      });
  }

  getInfo() {
    if(this.state.userLocation === true || this.state.zipCode !== null) {
      axios({
        url: '',
        baseURL: `https://api.darksky.net/forecast//${this.state.lat},${this.state.lng}`,
        method: 'GET'
      }).then((res) => {
          this.setState({
            current: res.data.currently,
            hourly: res.data.hourly,
            daily: res.data.daily
          })
          console.log(this.state.current);
          console.log(this.state.hourly);
          console.log(this.state.daily);
          console.log(moment.unix(1499450400))
        })
    }
}



  render() {

    if(this.state.current === "") {
    return (
      <div className="App">

        {this.askForLocation()}

      </div>
    );
  } else {
      return(
        <div className="App">
          {this.askForLocation()}

          <Currently
            current={this.state.current}
            time={this.state.time}
            zipCode={this.state.zipCode}
          />
          <Hourly
            hourly={this.state.hourly}
          />
        </div>
      );
    }
  }
}

export default App;
