import { connect } from 'react-redux';
import Results from './results_index';
import { fetchVehicles } from '../../actions/vehicle_actions';

const mapStateToProps = (state, ownProps) => ({
  queryString: ownProps.location.search,
  vehicles: Object.values(state.entities.vehicles)
});
const mapDispatchToProps = dispatch => ({
  fetchVehicles: (min, max, page) => dispatch(fetchVehicles(min, max, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);