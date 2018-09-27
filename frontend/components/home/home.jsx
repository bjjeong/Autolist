import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      min_price: '',
      max_price: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/results');
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
                <input placeholder="$0" id="min_price" type="number" class="validate" />
                <label for="min_price">Please Enter Minimum Price</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="$0" id="max_price" type="number" class="validate" />
                <label for="max_price">Please Enter Maximum Price</label>
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