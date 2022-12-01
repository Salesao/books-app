import { BookPage } from "pages/BookPage";
import { MainPageBooks } from "pages/MainPageBooks";
import { NotFoundPage } from "pages/NotFoundPage";

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: "/",
    element: <MainPageBooks />,
  },
  {
    path: ":id",
    element: <BookPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
