import * as TB from "./types";

export const setBooksAction = (
  payload: TB.ISetBooks["payload"]
): TB.ISetBooks => ({
  type: TB.SET_BOOKS,
  payload,
});

export const getBooksAction = (
  payload: TB.IGetBooks["payload"]
): TB.IGetBooks => ({
  type: TB.GET_BOOKS,
  payload,
});

export const cancelRequestBooksAction = (): TB.ICancelRequestBooks => ({
  type: TB.CANCEL_REQUEST_BOOKS,
});

export const setTotalBooksAction = (
  payload: TB.ISetTotalBooks["payload"]
): TB.ISetTotalBooks => ({
  type: TB.SET_TOTAL_BOOKS,
  payload,
});

export const setStartIndexSearch = (
  payload: TB.ISetStartIndexSearch["payload"]
): TB.ISetStartIndexSearch => ({
  type: TB.SET_START_INDEX_SEARCH,
  payload,
});

export const setFirstRender = (
  payload: TB.ISetFirstRender["payload"]
): TB.ISetFirstRender => ({
  type: TB.SET_FIRST_RENDER,
  payload,
});
