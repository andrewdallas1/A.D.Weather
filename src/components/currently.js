import React from 'react';
import FA from 'react-fontawesome';
import Skycons from 'react-skycons';
import Usage from './usage';
import moment from 'moment';

class Currently extends React.Component {
  constructor() {

    super();
    this.state = {
      data: null
    }

  }





    render() {
        let current = this.props.current
      let temp;
      let apparentTemp;
      let summary;
      let humidity;
      let precipProb;
      let icon;
        if(this.props.current.length === 0){
          return <h1>Loading</h1>
        }
        else {
          console.log()
          summary = this.props.current.summary;
          temp = parseInt(current.temperature);
          apparentTemp = parseInt(current.apparentTemperature);
          humidity = parseInt(current.humidity * 100);
          precipProb = current.precipProbability * 100;
          icon = current.icon.replace(/-/g, "_");
          icon = icon.toUpperCase();
          }
      return(
        <div className="current">
          <div className="info">

          <div className="icon">
            <Usage className="icon">
              <Skycons color='white' icon={icon} />
            </Usage>
          </div>
            <h1>{temp}&deg;</h1>
            <h3>Feels like: {apparentTemp}&deg;</h3>
            <h2>{summary}</h2>
            <h3>Humidity: {humidity}%</h3>
            <h3>Chance of Precipitation: {precipProb}%</h3>
          </div>
          <a><h3>Powered by DarkSky</h3></a>
        </div>
      )


  }


}

export default Currently;

