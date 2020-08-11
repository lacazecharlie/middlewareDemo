/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React, { Component } from 'react';
import './style.css';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */
class Card extends Component {
  render() {
    const { imgLink, date, title, downloadLink } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <img src={imgLink} alt={imgLink} />
        </div>
        <div className="card-body">
          <div className="card-date">
            <time>{date}</time>
          </div>
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          {downloadLink && <a onClick={() => window.open(downloadLink)}>download</a>}
        </div>
      </div>
    );
  }
}

Card.propTypes = {};
Card.defaultProps = {};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default Card;
