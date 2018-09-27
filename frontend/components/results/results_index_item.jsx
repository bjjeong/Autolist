import React from 'react';

const ResultsIndexItem = (props) => {
  return(
    <li className="result-index-item collection-item">
      {props.vehicle.price}----{props.vehicle.vin}----{props.vehicle.make}-{props.vehicle.model}-{props.vehicle.year}
    </li>
  );
};

export default ResultsIndexItem;