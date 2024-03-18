import styled from "styled-components";
import dots from "../../../assets/images/bgElements/dots.svg";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

const About = styled.section`
  overflow-x: hidden;
  
  position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    width: 155px;
    height: 155px;
    border: 1px solid ${theme.colors.secondaryColor};

    position: absolute;
    left: -77px;
    top: 188px;
    z-index: -1;

    @media ${theme.media.container} {
      left: calc(50% - 760px);
    }
  }
  
  &::after {
    content: "";
    width: 103px;
    height: 103px;
    background-image: url(${dots});
    background-size: cover;

    position: absolute;
    right: -23px;
    bottom: 156px;
    z-index: -1;

    @media ${theme.media.container} {
      right: calc(50% - 707px);
    }
  }
  
  ${Container} > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column-reverse;
      justify-content: center;
      gap: 20px;
    }
  }
`

export const S = {
    About
}