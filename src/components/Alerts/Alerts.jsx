/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { connect } from 'react-redux';
import AlertsComponent from './AlertsComponent';
import { clearNotification } from './actions';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const Alerts = connect(mapStateToProps, mapDispatchToProps)(AlertsComponent);

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */
function mapStateToProps(state) {
  return {
    alertList: state.AlertsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearNotification: (id) => dispatch(clearNotification(id)),
  };
}

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default Alerts;
