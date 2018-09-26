import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      min_price: '',
      max_price: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

  }

  render() {

    return(
      <div className="home-page">
        <h1> Home Page </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Home;