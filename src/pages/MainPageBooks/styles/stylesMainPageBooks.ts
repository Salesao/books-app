import styled from "@emotion/styled";
import { COLORS } from "constants/colors";
import { EBreakPointsUI } from "types/breakpoints";
import { BaseText, StyledButton } from "UI/styled";

export const LoadMoreButton = styled(StyledButton)`
  border: 1px solid ${COLORS.lightGray};
  color: ${COLORS.black};
  margin: 2rem 0;
  span {
    color: ${COLORS.lightGray};
  }
  :hover {
    border: 1px solid ${COLORS.gray};
  }
`;

export const TitleTextApp = styled(BaseText)`
  text-align: center;
  padding: 64px 0 32px 0;
  @media (max-width: ${EBreakPointsUI.lg}px) {
    padding: 32px 0;
  }
  @media (max-width: ${EBreakPointsUI.sm}px) {
    padding: 15px 0;
  }
`;

export const ContainerBookItem = styled.div`
  background-color: ${COLORS.whiteGray};
  border-radius: 10px;
  padding: 20px 15px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  .book_container_img {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    .book_img {
      width: 75%;
      aspect-ratio: 1;
    }
  }
`;
