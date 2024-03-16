import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Switch = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  
  svg {
    color: ${theme.colors.secondaryColor};
  }

  &:hover p, &:hover svg {
    color: ${theme.colors.primaryColor};
  }
`

const Language = styled.p`
  color: ${theme.colors.secondaryColor};
`

export const S = {
    Switch,
    Language
}