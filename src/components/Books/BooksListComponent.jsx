/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React, { Component } from "react";
import { func, array, shape, bool } from "prop-types";
import get from "lodash/get";
import "./style.css";
import Card from "./components/Card";

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

  handleFetchBooks = event => {
    const { fetchBooks } = this.props;
    const { researchParameterValue } = this.state;
    fetchBooks(researchParameterValue);
    event.preventDefault();
  };

  render() {
    const { bookList, bookPending } = this.props;
    const { researchParameterValue } = this.state;

    return (
      <div>
        <h1 className="flex-center">BOOKS SEARCHING</h1>
        <form onSubmit={this.handleFetchBooks} className="flex-center">
          <input
            type="text"
            placeholder="Search for a book name"
            onChange={this.handleInputChange}
            value={researchParameterValue}
          />
          <button type="submit">GO</button>
        </form>
        {bookPending ? (
          <div className="flex-center">
            <div className="loader" />
          </div>
        ) : (
          <div className="cardList">
            {get(bookList, "items", []).map(bookItem => {
              return (
                <Card
                  title={get(bookItem, "volumeInfo.title", "TITLE")}
                  imgLink={get(bookItem, "volumeInfo.imageLinks.thumbnail")}
                  date={get(bookItem, "volumeInfo.publishedDate")}
                  downloadLink={get(
                    bookItem,
                    "accessInfo.pdf.downloadLink",
                    get(bookItem, "accessInfo.webReaderLink")
                  )}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

BooksListComponent.propTypes = {
  bookPending: bool,
  fetchBooks: func,
  bookList: shape({
    items: array
  })
};
BooksListComponent.defaultProps = {};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default BooksListComponent;
