import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Technologies = styled.ul`
  padding: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const Technology = styled.li`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`

export const S = {
    Technologies,
    Technology
}