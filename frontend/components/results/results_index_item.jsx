import React from 'react';

const ResultsIndexItem = (props) => {
  return(
    <li className="result-index-item collection-item avatar">
      <img src={props.vehicle.primary_photo_url} alt="" className="circle"/>
        <span className="title">{props.vehicle.year} {props.vehicle.make} {props.vehicle.model}</span>
        <p>{props.vehicle.price}</p>
    </li>
  );
};

export default ResultsIndexItem;