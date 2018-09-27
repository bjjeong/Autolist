import React, { Component } from 'react';
import queryString from 'query-string';
import ResultsIndexItem from './results_index_item.jsx';

class ResultsIndex extends Component {
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
    let { vehicles } = this.props;

    return(
      <div className="results">
        <div className="result-container">
          <h3>Search Results</h3>
          <ul className="collection">
            {vehicles.map(vehicle => (
              <ResultsIndexItem
                key={vehicle.vin}
                vehicle={vehicle}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ResultsIndex;