import { MenuItem, SelectChangeEvent, SelectProps } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { IBaseInput } from "./BaseInput";
import { StyledInputLabel, StyledSelect } from "./styled";

export interface IBaseSelect
  extends Omit<SelectProps, "id" | "labelId" | "value" | "onChange">,
    Pick<IBaseInput, "id" | "nameLabel"> {
  listSelect: object;
  handleChange: (value: string) => void;
  initialSelect?: string;
}

export const BaseSelect: React.FC<IBaseSelect> = ({
  id,
  nameLabel,
  listSelect,
  handleChange,
  initialSelect,
  ...props
}) => {
  const listSelectArr = useRef(Object.keys(listSelect)).current;
  const menuItemMap = listSelectArr.map((select) => (
    <MenuItem key={select} value={select}>
      {listSelect[select]}
    </MenuItem>
  ));
  const [selectState, setSelectState] = useState(
    initialSelect ?? listSelectArr[0]
  );

  const handlerSetSelect = (e: SelectChangeEvent) => {
    setSelectState(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <>
      <StyledInputLabel htmlFor={id}>{nameLabel}</StyledInputLabel>
      <StyledSelect
        onChange={handlerSetSelect}
        value={selectState}
        size="small"
        labelId={id}
        id={id}
        {...props}
      >
        {menuItemMap}
      </StyledSelect>
    </>
  );
};
