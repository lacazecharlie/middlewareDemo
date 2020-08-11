/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { connect } from "react-redux";
import BooksListComponent from "./BooksListComponent";
import { fetchBooks } from "./actions";
import BooksReducer from "./reducer";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */
function mapStateToProps(state, ownProps) {
  return { bookList: state.BooksReducer.bookList };
}

const mapDispatchToProps = {
  fetchBooks
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default connect(mapStateToProps, mapDispatchToProps)(BooksListComponent);
