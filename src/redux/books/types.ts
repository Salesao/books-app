import { CancelTokenSource } from "axios";

export const SET_BOOKS = "BOOKS/SET_BOOKS";
export const GET_BOOKS = "BOOKS/GET_BOOKS";
export const CANCEL_REQUEST_BOOKS = "BOOKS/CANCEL_REQUEST_BOOKS";

export const SET_TOTAL_BOOKS = "BOOKS/SET_TOTAL_BOOKS";

export const SET_START_INDEX_SEARCH = "BOOKS/SET_START_INDEX_SEARCH";

export const SET_FIRST_RENDER = "BOOKS/SET_FIRST_RENDER";

export const MAX_RESULTS = 30;

export interface IBooksState {
  books: IBook[] | null;
  totalBooks: number;
  startIndexSearch: number;
  firstRender: boolean;
}

export interface IBook {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  industryIdentifiers: { type: string; identifier: string }[];
  readingModes: { text: boolean; image: boolean };
  printType: string;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks: { smallThumbnail: string; thumbnail: string };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  categories: string[];
  description: string;
}

export enum ECategoryBooks {
  all = "Все",
  art = "Арты",
  biography = "Биография",
  computers = "Компьютеры",
  history = "История",
  medical = "Медицина",
  poetry = "Стихи",
}

export enum ESortBooks {
  relevance = "По релеватности",
  newest = "Новинки",
}

export interface IPropsMenuSearch {
  search: string;
  category: keyof typeof ECategoryBooks;
  sort: keyof typeof ESortBooks;
}

export interface IGetBooksProps extends IPropsMenuSearch {
  cancelSource: CancelTokenSource;
  callback: (err?: string) => void;
}

export interface IResultBooksRequest {
  totalBooks: number;
  books: IBook[];
}

export interface ISetBooks {
  type: typeof SET_BOOKS;
  payload: IBook[];
}

export interface IGetBooks {
  type: typeof GET_BOOKS;
  payload: IGetBooksProps;
}

export interface ICancelRequestBooks {
  type: typeof CANCEL_REQUEST_BOOKS;
}

export interface ISetTotalBooks {
  type: typeof SET_TOTAL_BOOKS;
  payload: number;
}

export interface ISetStartIndexSearch {
  type: typeof SET_START_INDEX_SEARCH;
  payload: number;
}

export interface ISetFirstRender {
  type: typeof SET_FIRST_RENDER;
  payload: boolean;
}

export type TActionBooks =
  | ISetBooks
  | ISetTotalBooks
  | ISetStartIndexSearch
  | ISetFirstRender;
