import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const StyledButton = styled.button`
  padding: 8px 16px;
  width: max-content;
  min-width: 109px;
  height: 37px;
  ${font({weight: 500, Fmax: 16, Fmin: 14})};
  background: transparent;
  border: 1px solid ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    background: ${theme.colors.accent};
    border: 1px solid ${theme.colors.accent};
  }
`