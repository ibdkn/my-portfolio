import styled from "styled-components";
import {theme} from "../styles/Theme";

export const StyledButton = styled.button`
  padding: 8px 16px;
  width: max-content;
  min-width: 109px;
  height: 37px;
  font-weight: 500;
  font-size: 16px;
  background: transparent;
  border: 1px solid ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    background: ${theme.colors.accent};
    border: 1px solid ${theme.colors.accent};
  }
`