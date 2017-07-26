import React from 'react';
import Skycons from 'react-skycons';
import Usage from './usage';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

class Daily extends React.Component {
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
    if(this.props.daily !== null) {
      console.log(this.props.daily)
      let data = [];
      for(let i = 0; i < 8; i++) {
        data.push(this.props.daily.data[i]);
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
        <div className="daily">
          {this.state.data.map((item,i) =>
            <Col sm={6} md={3} >
            <div id={i} key={i} className="day">
              <h4>{moment(item.time * 1000).format('ddd')}</h4>
              <Usage className="icon">
                <Skycons color='white' icon={item.icon.toUpperCase().replace(/-/g, "_")} />
              </Usage>
              <h2>High: {parseInt(item.temperatureMax)}&deg;</h2>
              <h2>Low: {parseInt(item.temperatureMin)}&deg;</h2>
              <h4>{item.summary}</h4>
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


export default Daily;
