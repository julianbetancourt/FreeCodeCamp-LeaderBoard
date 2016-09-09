import React, { Component } from 'react';
import axios from 'axios';
import Row from '../components/Row';

class AllTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(data => {
      this.setState({data: data.data})
    })
  }

  render() {
    return (
      <tbody>
        {
          this.state.data.map((r, i) => {
            return <Row
              n={i+1}
              img={r.img}
              name={r.username}
              past30={r.recent}
              allTime={r.alltime}
              type='allTime'
              key={i} />
          })
        }
      </tbody>
    );
  }
}


export default AllTime;
