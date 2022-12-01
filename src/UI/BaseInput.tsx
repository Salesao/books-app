import { InputProps } from "@mui/material";
import React, { RefObject } from "react";
import * as S from "./styled";

export interface IBaseInput extends Omit<InputProps, "id"> {
  id: string;
  nameLabel: string;
  refInput?: RefObject<HTMLInputElement>;
}

export const BaseInput: React.FC<IBaseInput> = ({
  id,
  nameLabel,
  refInput,
  ...props
}) => {
  return (
    <>
      <S.StyledInputLabel htmlFor={id}>{nameLabel}</S.StyledInputLabel>
      <S.StyledInput
        ref={refInput}
        id={id}
        size="small"
        disableUnderline
        {...props}
      />
    </>
  );
};
