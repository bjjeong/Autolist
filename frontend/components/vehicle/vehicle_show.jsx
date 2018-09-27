import React from 'react';

const VehicleShow = (props) => {
  let vehicle = props.location.state.vehicle;

  return(
    <div className="vehicle-show">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={vehicle.primary_photo_url} />
          </div>
          <div className="card-content">
            <span className="card-title">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleShow;