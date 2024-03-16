import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Name = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`

const Social = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ABB2BF;

  &:hover,
  &:hover ${Name} {
    color: ${theme.colors.primaryColor};
  }
`

export const S = {
    Name,
    Social
}