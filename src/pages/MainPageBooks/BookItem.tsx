import { Grid } from "@mui/material";
import { COLORS } from "constants/colors";
import React, { useRef } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { IBook } from "redux/books/types";
import { BaseText } from "UI/styled";
import { transformHashBooks } from "utils/transformHashBooks";
import { ContainerBookItem } from "./styles/stylesMainPageBooks";

interface IBookItem extends IBook {}

export const BookItem: React.FC<IBookItem> = (bookProps) => {
  const { title, authors, imageLinks, categories, id } = bookProps;
  const navigate = useNavigate();
  const hashCategories = useRef(
    categories ? transformHashBooks(categories) : "Нет категории"
  ).current;
  const authorsRef = useRef(authors?.join(", ") ?? "Нет автора").current;
  const handlerNavigateBookMoreInfo = () => {
    navigate(`./${id}`, {
      state: {
        ...bookProps,
        authors: authorsRef,
        categories: hashCategories,
      },
    });
  };
  return (
    <Grid item xs={6} md={4} lg={3} alignItems={"stretch"}>
      <ContainerBookItem onClick={handlerNavigateBookMoreInfo}>
        <div className="book_container_img">
          <img
            src={imageLinks?.thumbnail ?? require("img/booksImg.png")}
            className="book_img"
            alt=""
          />
        </div>
        <BaseText fontSize={"12px"} color={COLORS.darkBlue}>
          {hashCategories}
        </BaseText>
        <BaseText fontSize={"14px"} fontWeight={500}>
          {title}
        </BaseText>
        <BaseText fontSize={"12px"} color={COLORS.gray}>
          {authorsRef}
        </BaseText>
      </ContainerBookItem>
    </Grid>
  );
};

export const MemoBookItem = memo(BookItem);
