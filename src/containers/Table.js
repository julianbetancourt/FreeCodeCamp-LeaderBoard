import React, { Component } from 'react';
import Past30 from './Past30';
import AllTime from './AllTime';

const activeStyles = {
  background: '#65dc7f',
  color: 'white',
  borderBottom: '4px solid #387e47'
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      past30: true
    }
  }
  render() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th
              onClick={() => this.setState({past30: true})}
              style={this.state.past30 ? activeStyles : { cursor: 'pointer'}}>Points in past 30 days</th>
            <th
              onClick={() => this.setState({past30: false})}
              style={this.state.past30 ? { cursor: 'pointer'} : activeStyles}>All time points</th>
          </tr>
        </thead>
        {this.state.past30 ? <Past30 /> : <AllTime />}
      </table>
    );
  }
}

export default Table;
