import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      minPrice: 0,
      maxPrice: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let minPrice = this.state.minPrice;
    let maxPrice = this.state.maxPrice;
    let page = 1;

    this.props.fetchVehicles(minPrice, maxPrice, page);
    // this.props.history.push('/results');
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    return(
      <div className="home-page">
        <div className="form-container row z-depth-2">
          <form onSubmit={this.handleSubmit} className="col s12">
            <h1 className="title"> Autolist Vehicle Search </h1>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="$0"
                  id="minPrice"
                  type="number"
                  className="validate"
                  onChange={this.update("minPrice")}
                />
                <label htmlFor="minPrice">Please Enter Minimum Price</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="$0"
                  id="maxPrice"
                  type="number"
                  className="validate"
                  onChange={this.update("maxPrice")}
                />
                <label htmlFor="maxPrice">Please Enter Maximum Price</label>
              </div>
            </div>
            <button type="submit" className="btn waves-effect waves-light">Search Vehicles</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);