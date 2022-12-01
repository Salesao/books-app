import {
  call,
  cancelled,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { cancelSaga } from "redux/utilsSaga/cancelSaga";
import {
  setBooksAction,
  setFirstRender,
  setStartIndexSearch,
  setTotalBooksAction,
} from "../action";
import { getBooksRequest } from "../api/getBooksRequest";
import { booksStateSelect, firstRenderSelect } from "../reducer";
import * as TB from "../types";

function* getBooksSaga({ payload }: TB.IGetBooks) {
  const { books, startIndexSearch, totalBooks: totalBooksRedux }: TB.IBooksState = yield select(
    booksStateSelect
  );
  try {
    const { books: booksFromRequest, totalBooks }: TB.IResultBooksRequest =
      yield call(getBooksRequest, { ...payload, startIndexSearch });
    yield put(setTotalBooksAction(startIndexSearch > 0 ? totalBooksRedux : totalBooks));
    yield put(
      setBooksAction(
        booksFromRequest !== null && startIndexSearch > 0
          ? [...books, ...booksFromRequest]
          : booksFromRequest
      )
    );
    yield put(setStartIndexSearch(startIndexSearch + TB.MAX_RESULTS));
    yield payload.callback();
  } catch (error) {
    console.log(error);
    yield payload.callback("error");
  } finally {
    const firstRender: boolean = yield select(firstRenderSelect);
    if (firstRender) {
      yield put(setFirstRender(false));
    }
    if (yield cancelled()) {
      yield call(payload.cancelSource.cancel);
      console.log("cancel saga");
    }
  }
}
// Здесь присуствует отмена реквеста, нужен при демонтаже страницы, если пользователь переключился на другую страницу или вышел из неё
export function* getBooksWatcher() {
  const booksSaga = yield takeEvery(TB.GET_BOOKS, getBooksSaga);
  yield takeLatest(TB.CANCEL_REQUEST_BOOKS, cancelSaga, booksSaga);
}
