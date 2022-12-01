import { api } from "api/api";
import {
  IBook,
  IBooksState,
  IGetBooksProps,
  IResultBooksRequest,
  MAX_RESULTS,
} from "../types";

interface IBooksResultRequest {
  totalItems: number;
  items: { id: string; volumeInfo: IBook }[];
}

interface IGetBooksRequestProps
  extends IGetBooksProps,
    Pick<IBooksState, "startIndexSearch"> {}

export const getBooksRequest = async ({
  cancelSource,
  category,
  search,
  sort,
  startIndexSearch,
}: IGetBooksRequestProps): Promise<IResultBooksRequest> => {
  const {
    data: { totalItems, items },
  }: { data: IBooksResultRequest } = await api.get(
    `/volumes?q=${
      search.length > 0 ? `"${search}"+intitle:` : ""
    }${category}+subject&startIndex=${startIndexSearch}&maxResults=${MAX_RESULTS}&orderBy=${sort}`,
    {
      cancelToken: cancelSource.token,
    }
  );
  const books: IBook[] = items
    ? items.reduce(
        (prev, item) => [
          ...prev,
          {
            ...item.volumeInfo,
            id: item.id,
          },
        ],
        []
      )
    : null;
  return { books, totalBooks: totalItems };
};
