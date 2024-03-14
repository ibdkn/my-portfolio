import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

type TitlePropsType = {
  titleType?: "section" | "page",
  lineWidth?: string
}

export const StyledTitle = styled.h2<TitlePropsType>`
  position: relative;
  width: max-content;
  ${font({weight: 500, Fmax: 32, Fmin: 24})};

  ${props => props.titleType === "section" && css<TitlePropsType>`
    margin-bottom: 48px;
    
    &::before {
      content: "#";
      color: ${theme.colors.accent};
    }

    &::after {
      content: "";
      width: ${props.lineWidth};
      height: 1px;
      background-color: ${theme.colors.accent};

      position: absolute;
      right: calc(0% - ${props.lineWidth} - 16px);
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
  `}

  ${props => props.titleType === "page" && css<TitlePropsType>`
    margin-bottom: 14px;
    
    &::before {
      content: "/";
      color: ${theme.colors.accent};
    }
  `}
`
