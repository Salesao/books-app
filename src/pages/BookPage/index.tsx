import { Container, css, Grid } from "@mui/material";
import { COLORS } from "constants/colors";
import { NotFoundPage } from "pages/NotFoundPage";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IBook } from "redux/books/types";
import { BaseHr, BaseText, StyledLink } from "UI/styled";
import { ContainerCoverBook } from "./styles/stylesBookPage";

interface IBookPage {}

export const BookPage: React.FC<IBookPage> = () => {
  const navigate = useNavigate();
  const { state }: { state: IBook } = useLocation();
  const handlerBackSearchBook = () => {
    navigate("../");
  };

  if (state === null) {
    return <NotFoundPage />;
  }

  return (
    <Container style={{ paddingTop: "24px", paddingBottom: "24px" }}>
      <StyledLink
        to={"../"}
        onClick={handlerBackSearchBook}
        color={COLORS.darkBlue}
        dopStyle={css`
          margin-top: 10px;
        `}
      >
        Вернуться к поиску
      </StyledLink>
      <Grid container height={"100%"} paddingTop={3}>
        <Grid item xs={12} sm={6}>
          <ContainerCoverBook>
            <img
              src={state.imageLinks?.thumbnail ?? require("img/booksImg.png")}
              alt=""
              className="img_cover"
            />
          </ContainerCoverBook>
        </Grid>
        <Grid item xs={12} sm={6} paddingLeft={3}>
          <BaseText
            color={COLORS.darkBlue}
            fontSize={"12px"}
            dopStyle={css`
              padding-top: 0;
            `}
          >
            {state.categories}
          </BaseText>
          <BaseText fontWeight={500} fontSize={"1.8rem"}>
            {state.title}
          </BaseText>
          <BaseText fontSize={"12px"} color={COLORS.gray}>
            {state.authors}
          </BaseText>
          <BaseHr margin={"15px 0"} />
          <BaseText fontSize={"1.2rem"} fontWeight={500}>
            Описание
          </BaseText>
          <BaseText
            fontSize={"0.8rem"}
            dopStyle={css`
              line-height: 24px;
              padding-bottom: 0;
            `}
          >
            {state.description ?? "Нет информации об этой книге"}
          </BaseText>
        </Grid>
      </Grid>
    </Container>
  );
};
