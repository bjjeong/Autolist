import React from 'react';
import { withRouter } from 'react-router';

const ResultsIndexItem = (props) => {
  return(
    <a onClick={() => props.history.push(`/vehicle/${props.vehicle.vin}`)}className="result-index-item collection-item avatar">
      <img src={props.vehicle.primary_photo_url} alt="" className="circle"/>
        <span className="title">{props.vehicle.year} {props.vehicle.make} {props.vehicle.model}</span>
        <p>{props.vehicle.price}</p>
    </a>
  );
};

export default withRouter(ResultsIndexItem);