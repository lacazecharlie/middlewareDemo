/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { connect } from "react-redux";
import BooksListComponent from "./BooksListComponent";
import { fetchBooks } from "./actions";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */
function mapStateToProps(state) {
  return {
    bookList: state.BooksReducer.bookList,
    bookPending: state.BooksReducer.bookPending
  };
}

const mapDispatchToProps = {
  fetchBooks
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default connect(mapStateToProps, mapDispatchToProps)(BooksListComponent);
