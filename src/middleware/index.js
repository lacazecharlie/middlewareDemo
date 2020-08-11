import Api from "./core/Api";
import BooksMiddleware from "../components/Books/BooksMiddleware";

export default [...Api, ...BooksMiddleware];
