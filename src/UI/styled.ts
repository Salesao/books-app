import { CSSProperties } from "@emotion/serialize";
import styled from "@emotion/styled";
import {
  Button,
  CircularProgress,
  Input,
  InputLabel,
  LinearProgress,
  Select,
} from "@mui/material";
import { COLORS } from "constants/colors";
import { SerializedStyles } from "@emotion/serialize";
import { Link } from "react-router-dom";

const fonts = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

export interface IBaseStyle {
  dopStyle?: SerializedStyles;
}

export const StyledInput = styled(Input)<IBaseStyle>`
  .MuiInputBase-input {
    padding: 3px 10px;
    animation: none;
  }
  border: 1px solid ${COLORS.lightGray};
  border-radius: 6px;
  width: 100%;
  ${({ dopStyle }) => dopStyle}
`;

export const StyledInputLabel = styled(InputLabel)<IBaseStyle>`
  color: ${COLORS.gray};
  font-size: 1rem;
  ${({ dopStyle }) => dopStyle}
`;

export const StyledSelect = styled(Select)<IBaseStyle>`
  width: 100%;
  border-radius: 6px;
  .MuiSelect-select {
    padding: 4px 10px;
  }
  .MuiOutlinedInput-notchedOutline {
    :hover {
      border-color: ${COLORS.lightGray};
    }
  }
  ${({ dopStyle }) => dopStyle}
`;

export interface IBaseText
  extends IBaseStyle,
    Partial<Pick<CSSProperties, "fontWeight" | "color" | "fontSize">> {}

export const BaseText = styled.p<IBaseText>`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ color }) => color || COLORS.black};
  font-family: ${fonts};
  ${({ dopStyle }) => dopStyle}
`;

interface IStyledButton
  extends IBaseStyle,
    Partial<Pick<CSSProperties, "backgroundColor">> {}

export const StyledButton = styled(Button)<IStyledButton>`
  width: 100%;
  padding: 3px 0;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || COLORS.darkBlue};
  text-transform: none;
  :hover {
    background-color: ${({ backgroundColor }) =>
      backgroundColor || COLORS.darkBlue};
  }
  ${({ dopStyle }) => dopStyle}
`;

interface IBaseHr extends IBaseStyle, Partial<Pick<CSSProperties, "margin">> {
  colorHR?: CSSProperties["color"];
  heightBorder?: CSSProperties["height"];
}

export const BaseHr = styled.div<IBaseHr>`
  border-top: ${({ heightBorder }) => heightBorder || "1px"} solid
    ${({ colorHR }) => colorHR || COLORS.darkWhite};
  margin: ${({ margin }) => margin || "30px 0"};
  ${({ dopStyle }) => dopStyle}
`;

export const StyledLink = styled(Link)<IBaseText>`
  font-family: ${fonts};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ color }) => color || COLORS.darkBlue};
  ${({ dopStyle }) => dopStyle};
`;

interface IStyledLinearProgress
  extends IBaseStyle,
    Partial<Pick<CSSProperties, "backgroundColor" | "margin" | "height">> {
  progressLineColor?: CSSProperties["backgroundColor"];
}

export const StyledLinearProgress = styled(
  LinearProgress
)<IStyledLinearProgress>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || COLORS.darkWhite};
  margin: ${({ margin }) => margin || "30px 0"};
  height: ${({ height }) => height || "2px"};
  .MuiLinearProgress-bar {
    background-color: ${({ progressLineColor }) =>
      progressLineColor || COLORS.darkBlue};
  }
  ${({ dopStyle }) => dopStyle}
`;

interface IStyledCircularProgress
  extends IBaseStyle,
    Partial<Pick<CSSProperties, "color">> {}

export const StyledCircularProgress = styled(
  CircularProgress
)<IStyledCircularProgress>`
  color: ${({ color }) => color || COLORS.darkBlue};
  ${({ dopStyle }) => dopStyle}
`;
