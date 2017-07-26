import React from 'react';
import Skycons from 'react-skycons';
import Usage from './usage';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

class Hourly extends React.Component {
  constructor() {
    super();
      this.state = {
        data: null
      }

      this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.setData();
  }

  setData() {
    if(this.props.hourly !== null) {
      console.log(this.props.hourly)
      let data = [];
      for(let i = 0; i < 12; i++) {
        data.push(this.props.hourly.data[i]);
        console.log(data);

      }
      this.setState({
        data: data
      })
    }
  }


  render() {


    if(this.state.data !== null) {
      return(
        <Row>
        <div className="hourly">
          {this.state.data.map((item,i) =>
            <Col sm={4} md={2} >
            <div id={i} className="hour">
              <h4>{moment(item.time * 1000).format('ha')}</h4>
              <Usage className="icon">
                <Skycons color='white' icon={item.icon.toUpperCase().replace(/-/g, "_")} />
              </Usage>
              <h2>{parseInt(item.temperature)}&deg;</h2>
              <h3>{item.summary}</h3>
              <h5>Humidity: {parseInt(item.humidity * 100)}%</h5>
              <h5>Chance of Precipitation: {parseInt(item.precipProbability * 100)}%</h5>
            </div>
            </Col>
          )}
        </div>
        </Row>
      )
    } else {
      return(
        <div className="hourly">
          <h1>Loading</h1>
        </div>
      )
    }

  }


}


export default Hourly;
