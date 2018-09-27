import React, { Component } from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import ResultsIndexItem from './results_index_item.jsx';

class ResultsIndex extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    let { page, price_min, price_max } = queryString.parse(this.props.queryString);
    this.props.fetchVehicles(price_min, price_max, page);
  }

  nextPage() {
    let { page, price_min, price_max } = queryString.parse(this.props.queryString);
    page = Number(page) + 1;
    this.props.fetchVehicles(price_min, price_max, page);
    this.props.history.push({
      pathname: '/results',
      search: `?page=${page}${price_min ? `&price_min=${price_min}` : ''}${price_max ? `&price_max=${price_max}` : ''}`,
    });
  }

  previousPage() {
    let { page, price_min, price_max } = queryString.parse(this.props.queryString);
    page = Number(page) - 1;
    this.props.fetchVehicles(price_min, price_max, page);
    this.props.history.push({
      pathname: '/results',
      search: `?page=${page}${price_min ? `&price_min=${price_min}` : ''}${price_max ? `&price_max=${price_max}` : ''}`,
    });
  }

  render() {
    if(this.props.vehicles.length === 0) {
      return(
        <div>Loading</div>
      );
    }

    let { page } = queryString.parse(this.props.queryString);
    let { vehicles } = this.props;

    return(
      <div className="results">
        <div className="result-container">
          <div className="navigation">
            <button 
              disabled={page === '1' ? true : false}
              className="btn waves-effect waves-light"
              onClick={this.previousPage}>Previous</button>
            <h3>Search Results</h3>
            <button
              className="btn waves-effect waves-light"
              onClick={this.nextPage}>Next</button>
          </div>
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

export default withRouter(ResultsIndex);