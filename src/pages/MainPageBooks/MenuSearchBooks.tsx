import { Grid } from "@mui/material";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStartIndexSearch } from "redux/books/action";
import { startIndexSearchSelect } from "redux/books/reducer";
import {
  ECategoryBooks,
  ESortBooks,
  IPropsMenuSearch,
} from "redux/books/types";
import { BaseInput } from "UI/BaseInput";
import { BaseSelect } from "UI/BaseSelect";
import { StyledButton } from "UI/styled";

interface IMenuSearchBooks {
  propsMenuSearch: IPropsMenuSearch;
  setPropsMenuSearch: Dispatch<SetStateAction<IPropsMenuSearch>>;
  handlerRequestSearchBooks: () => void;
  isLoadingBooks: boolean;
}

export const MenuSearchBooks: React.FC<IMenuSearchBooks> = ({
  propsMenuSearch,
  setPropsMenuSearch,
  handlerRequestSearchBooks,
  isLoadingBooks,
}) => {
  const startIndexSearch = useSelector(startIndexSearchSelect);
  const dispatch = useDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropsMenuSearch((prev) => ({ ...prev, search: e.target.value }));
  };

  const handlerSelect = (
    keySelect: keyof Pick<IPropsMenuSearch, "category" | "sort">
  ) => {
    return (selectValue: string) => {
      setPropsMenuSearch((prev) => ({ ...prev, [keySelect]: selectValue }));
    };
  };

  const handlerRequest = () => {
    startIndexSearch > 0 && dispatch(setStartIndexSearch(0));
    handlerRequestSearchBooks();
  };

  const handlerSearchPressEnter = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      searchInputRef.current.blur();
      handlerRequest();
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={4} md={3}>
        <BaseInput
          value={propsMenuSearch.search}
          nameLabel="Название книги"
          id="book_name"
          onChange={handlerChangeSearch}
          onKeyDown={handlerSearchPressEnter}
          refInput={searchInputRef}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <BaseSelect
          nameLabel="Категория"
          id={"book_category"}
          listSelect={ECategoryBooks}
          handleChange={handlerSelect("category")}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <BaseSelect
          nameLabel="Сортировать по"
          id={"book_sort"}
          listSelect={ESortBooks}
          handleChange={handlerSelect("sort")}
        />
      </Grid>
      <Grid item xs={6} sm={12} md={3} display={"flex"} alignItems={"flex-end"}>
        <StyledButton
          disabled={isLoadingBooks}
          onClick={handlerRequest}
          variant="contained"
        >
          Начать поиск
        </StyledButton>
      </Grid>
    </Grid>
  );
};
