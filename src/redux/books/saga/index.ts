import { all } from "redux-saga/effects";
import { getBooksWatcher } from "./getBooksSaga";

export function* booksWatcher() {
  yield all([getBooksWatcher()]);
}
