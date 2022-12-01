import { IBooksState } from "./books/types";
import { combineReducers } from "redux";
import { BooksReducer } from "./books/reducer";

export interface IRootState {
  BooksReducer: IBooksState;
}

export default combineReducers<IRootState>({
  BooksReducer,
});
