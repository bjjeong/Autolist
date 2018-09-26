import { merge } from 'lodash';

// import { RECEIVE_VEHICLES } from '../actions/vehicle_actions';

const VehiclesReducer = (state = {}, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  
  switch (action.type) {
    // case RECEIVE_VEHICLES:
    //   return merge(newState, {
    //     [action.currentUser.user.id]: action.currentUser.user
    //   });
    default:
      return state;
  }
};

export default VehiclesReducer;