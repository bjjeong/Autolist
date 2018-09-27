import React from 'react';
import { withRouter } from 'react-router';

const ResultsIndexItem = (props) => {
  const request = {
    pathname: `/vehicle/${props.vehicle.vin}`,
    state: { vehicle: props.vehicle }
  };
  return(
    <a 
      onClick={() => props.history.push(request)}
      className="result-index-item collection-item avatar">
      <img src={props.vehicle.primary_photo_url} alt="" className="circle"/>
        <span className="title">{props.vehicle.year} {props.vehicle.make} {props.vehicle.model}</span>
        <p>{props.vehicle.price}</p>
    </a>
  );
};

export default withRouter(ResultsIndexItem);