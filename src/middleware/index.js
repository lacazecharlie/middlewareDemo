import Api from "./core/Api";
import BooksMiddleware from "../components/Books/BooksMiddleware";
import AlphabeticSort from "./core/AlphabeticSort";
import logger from "./core/logger";

export default [...Api, ...BooksMiddleware, ...AlphabeticSort, ...logger];
