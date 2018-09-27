import { connect } from 'react-redux';
import VehicleShow from './vehicle_show';

const mapStateToProps = (state, ownProps) => ({
  vehicle: ownProps.location.state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleShow);