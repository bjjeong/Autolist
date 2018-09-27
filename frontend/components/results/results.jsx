import React, { Component } from 'react';
import queryString from 'query-string';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    let { page, price_min, price_max } = queryString.parse(this.props.queryString);
    this.props.fetchVehicles(price_min, price_max, page);
  }

  render() {
    if(this.props.vehicles.length === 0) {
      return(
        <div>Loading</div>
      );
    }
    let {page, price_min, price_max} = queryString.parse(this.props.queryString);

    return(
      <div>
        {this.props.vehicles.length}
      </div>
    );
  }
}

export default Results;