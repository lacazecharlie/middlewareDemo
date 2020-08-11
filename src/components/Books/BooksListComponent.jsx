/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */
class BooksListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researchParameterValue: ""
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({ researchParameterValue: target.value });
  };

  handleFetchBooks = () => {
    const { fetchBooks } = this.props;
    const { researchParameterValue } = this.state;
    fetchBooks(researchParameterValue);
  };

  render() {
    const { bookList } = this.props;
    const { researchParameterValue } = this.state;

    return (
      <div>
        <input
          onChange={this.handleInputChange}
          value={researchParameterValue}
        />
        <button onClick={this.handleFetchBooks}>GO</button>
        {bookList && bookList.items.length && bookList.items.map(bookItem => {
          return (
            <div key={bookItem.id}>
              <h1>{bookItem.volumeInfo.title}</h1>
              <img src={bookItem.imageLinks.thumbnail} alt="book img" />
            </div>
          )
        })}
      </div>
    );
  }
}

BooksListComponent.propTypes = {
  fetchBooks: PropTypes.func
};
BooksListComponent.defaultProps = {};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default BooksListComponent;
