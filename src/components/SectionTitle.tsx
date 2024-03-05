import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  position: relative;
  width: max-content;
  font-weight: 500;
  font-size: 32px;
  margin-bottom: 48px;

  &::before {
    content: "#";
    color: ${theme.colors.accent};
  }
  
  &::after {
    content: "";
    width: 511px;
    height: 1px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    right: calc(0% - 527px);
    top: 50%;
    transform: translateY(-50%);
  }
`
