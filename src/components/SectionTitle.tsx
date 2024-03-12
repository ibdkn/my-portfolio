import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  position: relative;
  width: max-content;
  ${font({weight: 500, Fmax: 32, Fmin: 24})};
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
    
    @media ${theme.media.tablet} {
      width: 205px;
      right: calc(0% - 215px);
    }
    
    @media ${theme.media.mobile} {
      display: none;
    }
  }
`
