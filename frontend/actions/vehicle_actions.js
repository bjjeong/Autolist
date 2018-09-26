import * as VehicleApiUtil from '../util/vehicle_api_util';

export const RECEIVE_VEHICLES = 'RECEIVE_VEHICLES';

export const receiveVehicles = vehicles => ({
  type: RECEIVE_VEHICLES,
  vehicles: vehicles.records
});

export const fetchVehicles = () => dispatch => (
  VehicleApiUtil.fetchVehicles().then(vehicles => dispatch(receiveVehicles(vehicles)))
);