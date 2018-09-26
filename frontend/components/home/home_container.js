import { connect } from 'react-redux';
import Home from './home';
import { fetchVehicles } from '../../actions/vehicle_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchVehicles: () => dispatch(fetchVehicles())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);