import React, { Component } from 'react';
import axios from 'axios';
import Row from '../components/Row';

class Past30 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
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
              type='past30'
              key={i} />
          })

        }
      </tbody>
    );
  }
}


export default Past30;
