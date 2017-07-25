import React from 'react';
import Skycons from 'react-skycons';
import Usage from './usage';

class Hourly extends React.Component {
  constructor() {
    super();


  }




    render() {
      const hourly = this.props.hourly;
      if(hourly.length === 0) {
        return <h1>Loading</h1>
      } else {


      console.log(hourly)
       const tenDay = [];
       for(let i = 0; i < 10; i++) {
        tenDay.push(hourly.data.i);
       }
       console.log(hourly.data[0])
      let temp;
      let summary;
      let humidity;
      let precipProb;
      let icon;
    }




      return(
        <div className="hourly">

        </div>
      )


  }


}


export default Hourly;
