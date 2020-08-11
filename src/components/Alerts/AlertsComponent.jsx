/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React, { Component } from "react";
import { func, string, arrayOf } from "prop-types"
import "./style.css";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */
class AlertsComponent extends Component {
  render() {
    const { alertList, clearNotification } = this.props;
    return (
      <div className="alertList">
        {alertList.map((alert, index) => {
          return <div className="alert">
            <div className="justify-end "><button className= "close-btn" onClick={() => {clearNotification(index)}}>x</button></div>
            <div>{alert}</div>
          </div>;
        })}
      </div>
    );
  }
}

AlertsComponent.propTypes = {
  alertList: arrayOf(string),
  clearNotification: func,
};
AlertsComponent.defaultProps = {};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default AlertsComponent;
