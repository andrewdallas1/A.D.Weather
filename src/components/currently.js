import React from 'react';
import FA from 'react-fontawesome';
import Skycons from 'react-skycons';
import Usage from './usage';

class Currently extends React.Component {
  constructor() {

    super();
    this.state = {
      data: null
    }

  }





    render() {


      console.log(this.props.lat)
      console.log(this.props.current)
        let current = this.props.current
      let temp;
      let summary;
      let humidity;
      let precipProb;
      let icon;
        if(this.props.current.length === 0){
          return <h1>Loading</h1>
        }
        else {
          summary = this.props.current.summary;
          temp = current.apparentTemperature;
          humidity = current.humidity * 100;
          precipProb = current.precipProbability * 100;
          icon = current.icon;
          switch(icon) {
            case "clear-day":
              icon = "CLEAR_DAY";
              break;
            case "clear-night":
              icon = "CLEAR_NIGHT";
              break;
            case "rain":
              icon = "RAIN";
              break;
            case "snow":
              icon = "SNOW";
              break;
            case "sleet":
              icon = "SLEET";
              break;
            case "wind":
              icon = "WIND";
              break;
            case "fog":
              icon = "FOG";
              break;
            case "cloudy":
              icon = "CLOUDY";
              break;
            case "partly-cloudy-day":
              icon = "PARTLY_CLOUDY_DAY";
              break;
            case "partly-cloudy-night":
              icon = "PARTLY_CLOUDY_NIGHT";
              break;
          }

          console.log(icon)
        }
      return(
        <div className="current">
          <div className="info">
            <h4>{temp}&deg;</h4>
            <h4>{summary}</h4>
            <h4>{humidity}% Humid</h4>
            <h4>{precipProb}% Chance of Precipitation</h4>
            <p>Updated: {this.props.time}</p>
          </div>
          <div className="icon">
            <Usage className="icon">
              <Skycons color='white' icon={icon} />
            </Usage>
          </div>
        </div>
      )


  }


}

export default Currently;

