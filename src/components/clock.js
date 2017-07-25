import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: moment().format('hh:mm a')
    }

    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.setTime();
  }

  setTime() {
    this.setState({
      time: moment().format('hh:mm a')
    })
    setTimeout(this.setTime, 1000);
  }


  render() {

    let currentTime = this.state.time

    return(
      <div className="clock">
        <h3>{currentTime}</h3>
      </div>
    )
  }
}


export default Clock;
