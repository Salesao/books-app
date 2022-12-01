import { IRootState } from "../rootReducer";
import * as TB from "./types";

const initialState: TB.IBooksState = {
  books: [],
  totalBooks: 0,
  startIndexSearch: 0,
  firstRender: true,
};

export const BooksReducer = (
  state = initialState,
  action: TB.TActionBooks
): TB.IBooksState => {
  switch (action.type) {
    case TB.SET_BOOKS: {
      return { ...state, books: action.payload };
    }
    case TB.SET_TOTAL_BOOKS: {
      return { ...state, totalBooks: action.payload };
    }
    case TB.SET_START_INDEX_SEARCH: {
      return { ...state, startIndexSearch: action.payload };
    }
    case TB.SET_FIRST_RENDER: {
      return { ...state, firstRender: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const booksStateSelect = ({ BooksReducer }: IRootState) => BooksReducer;
export const booksSelect = ({ BooksReducer: { books } }: IRootState) => books;
export const totalBooksSelect = ({
  BooksReducer: { totalBooks },
}: IRootState) => totalBooks;
export const startIndexSearchSelect = ({
  BooksReducer: { startIndexSearch },
}: IRootState) => startIndexSearch;
export const firstRenderSelect = ({
  BooksReducer: { firstRender },
}: IRootState) => firstRender;
