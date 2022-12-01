import styled from "@emotion/styled";
import { Container, css } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { BaseText, StyledButton } from "UI/styled";

interface INotFoundPage {}

export const NotFoundPage: React.FC<INotFoundPage> = () => {
  const navigate = useNavigate();
  const handlerBackBook = () => {
    navigate("../");
  };
  return (
    <ContainerNotFound>
      <BaseText
        fontSize={"2rem"}
        fontWeight={500}
        dopStyle={css`
          text-align: center;
        `}
      >
        404 Not Found
      </BaseText>
      <StyledButton
        onClick={handlerBackBook}
        backgroundColor={"transparent"}
        variant="outlined"
        dopStyle={css`
          width: 50%;
        `}
      >
        Вернуться к книжкам
      </StyledButton>
    </ContainerNotFound>
  );
};

const ContainerNotFound = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
