import styled from "@emotion/styled";
import { Container, css, Grid } from "@mui/material";
import axios from "axios";
import { COLORS } from "constants/colors";
import { useEffectOnce } from "hooks/useEffectOnce";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "redux/books/action";
import { booksStateSelect } from "redux/books/reducer";
import { IPropsMenuSearch } from "redux/books/types";
import {
  BaseHr,
  BaseText,
  StyledCircularProgress,
  StyledLinearProgress,
} from "UI/styled";
import { MemoBookItem } from "./BookItem";
import { MenuSearchBooks } from "./MenuSearchBooks";
import { LoadMoreButton, TitleTextApp } from "./styles/stylesMainPageBooks";

interface IMainPageBooks {}

export const MainPageBooks: React.FC<IMainPageBooks> = () => {
  const { books, totalBooks, firstRender } = useSelector(booksStateSelect);
  const dispatch = useDispatch();
  const [isLoadingBooks, setIsLoadingBooks] = useState(false);
  const [isLoadMoreBooks, setIsLoadMoreBooks] = useState(false);
  const [error, setError] = useState(false);
  const [propsMenuSearch, setPropsMenuSearch] = useState<IPropsMenuSearch>({
    search: "",
    category: "all",
    sort: "relevance",
  });
  const isLoadMoreBooksShow = books !== null && totalBooks !== books.length;

  const handlerRequestSearchBooks = useCallback(() => {
    setIsLoadingBooks(true);
    setIsLoadMoreBooks(true);
    dispatch(
      getBooksAction({
        ...propsMenuSearch,
        search: /\s/.test(propsMenuSearch.search)
          ? propsMenuSearch.search.replace(/\s/, "+")
          : propsMenuSearch.search,
        cancelSource: axios.CancelToken.source(),
        callback: (err) => {
          err !== undefined && setError(true);
          setIsLoadingBooks(false);
          setIsLoadMoreBooks(false);
        },
      })
    );
  }, [dispatch, propsMenuSearch]);

  const errorText = (
    <BaseText
      fontSize={"2rem"}
      fontWeight={500}
      dopStyle={css`
        text-align: center;
      `}
    >
      {"Что-то пошло не так : ( попробуйте снова нажать кнопку поиска"}
    </BaseText>
  );

  const emptyBooksText = (
    <BaseText
      fontSize={"2rem"}
      fontWeight={500}
      dopStyle={css`
        text-align: center;
      `}
    >
      {"Таких книжек найти не удалось, попробуйте проверить параметры поиска"}
    </BaseText>
  );

  const totalBooksText = (
    <BaseText
      fontSize={"1rem"}
      color={COLORS.gray}
      dopStyle={css`
        padding-top: 0;
        padding-bottom: 20px;
      `}
    >
      Найдено {totalBooks} результатов
    </BaseText>
  );

  useEffectOnce(() => {
    firstRender && handlerRequestSearchBooks();
  });

  return (
    <>
      <img src={require("img/booksImg.png")} style={{ width: "100%" }} alt="" />
      <Container>
        <TitleTextApp fontSize={"2rem"} fontWeight={500}>
          Быстрый поиск книг
        </TitleTextApp>
        <MenuSearchBooks
          propsMenuSearch={propsMenuSearch}
          setPropsMenuSearch={setPropsMenuSearch}
          handlerRequestSearchBooks={handlerRequestSearchBooks}
          isLoadingBooks={isLoadingBooks}
        />
        {isLoadingBooks ? (
          <StyledLinearProgress />
        ) : (
          <BaseHr heightBorder={"2px"} />
        )}
        {totalBooks > 0 && totalBooksText}
        {error && errorText}
        {books === null ? (
          emptyBooksText
        ) : (
          <GridContainerBooks
            isLoadingBooks={isLoadingBooks}
            container
            spacing={2}
            paddingBottom={!isLoadMoreBooksShow ? 3 : 0}
          >
            {books.map((book) => (
              <MemoBookItem key={book.id} {...book} />
            ))}
          </GridContainerBooks>
        )}
        {isLoadMoreBooksShow && (
          <LoadMoreButton
            disabled={isLoadingBooks || isLoadMoreBooks}
            backgroundColor={"transparent"}
            variant={"outlined"}
            onClick={handlerRequestSearchBooks}
          >
            {isLoadMoreBooks ? (
              <StyledCircularProgress size={25} />
            ) : (
              "Показать ещё"
            )}
          </LoadMoreButton>
        )}
      </Container>
    </>
  );
};

interface IGridContainerBooks {
  isLoadingBooks: boolean;
}

const GridContainerBooks = styled(Grid)<IGridContainerBooks>`
  ${({ isLoadingBooks }) =>
    isLoadingBooks &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;
