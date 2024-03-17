import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import dots from "../../../assets/images/bgElements/dots.svg";
import square from "../../../assets/images/bgElements/square.svg";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Main = styled.section`
  position: relative;
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 1035px) {
    ${Container} > ${FlexWrapper} {
      justify-content: center;
    }
  }
`

const Info = styled.div`
  max-width: 537px;
`

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 32px;
  
  span {
    color: ${theme.colors.accent};
  }
`

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 156%;
  color: ${theme.colors.secondaryColor};
  margin: 32px 0 24px;
`

const PhotoWrapper = styled.div`
  width: 469px;
  height: 420px;
  
  position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    width: 84px;
    height: 84px;
    background-image: url(${dots});
    background-repeat: no-repeat;
    background-size: cover;
    
    position: absolute;
    bottom: 56px;
    right: 16px;
    z-index: 1;

    @media ${theme.media.mobile} {
      width: 56px;
      height: 56px;
      
      right: 11px;
      bottom: 38px;
    }
  }
  
  &::after {
    content: "";
    width: 155px;
    height: 155px;
    background-image: url(${square});
    background-repeat: no-repeat;
    background-size: cover;
    
    position: absolute;
    top: 84px;
    left: -12px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 104px;
      height: 104px;
      
      top: 57px;
      left: -9px;
    }
  }
  
  @media ${theme.media.mobile} {
    width: 316px;
    height: 260px;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const SubtextWrapper = styled.div`
  padding: 8px 34px;
  border: 1px solid ${theme.colors.secondaryColor};

  @media ${theme.media.mobile} {
    max-width: 316px;
  }
`

const Subtext = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};

  span {
    color: ${theme.colors.primaryColor};
  }
  
  &::before {
    content: "";
    width: 16px;
    height: 16px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -26px;
    transform: translateY(-50%);
  }
`

export const S = {
    Main,
    Info,
    MainTitle,
    Description,
    PhotoWrapper,
    Photo,
    SubtextWrapper,
    Subtext
}