import { COLORS } from "./../../../constants/colors";
import styled from "@emotion/styled";

export const ContainerCoverBook = styled.div`
  background-color: ${COLORS.whiteGray};
  padding: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .img_cover {
    width: 100%;
    height: 100%;
  }
`;
