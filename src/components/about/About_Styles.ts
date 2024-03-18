import styled from "styled-components";
import {theme} from "../../styles/Theme";
import dotsGroup from "../../assets/images/bgElements/dots-group.svg";


// description
const Description = styled.div`
  max-width: 515px;
  width: 100%;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    color: ${theme.colors.secondaryColor};
    margin-bottom: 27px;
  }
`

// photo
const PhotoWrapper = styled.div`
  max-width: 420px;
  width: 100%;
  position: relative;
  z-index: 0;
  
  &::after {
    content: "";
    width: 327px;
    height: 276px;
    background-image: url(${dotsGroup});
    background-size: cover;
    position: absolute;
    top: 59px;
    left: -4px;
    z-index: 1;

    @media ${theme.media.mobile} {
      width: 249px;
      height: 221px;
      top: 10px;
      left: -15px;
    }
  }
  
  &::before {
    content: "";
    width: 420px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: -20px;
    bottom: 2px;

    @media ${theme.media.mobile} {
      width: 320px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${theme.media.mobile} {
    max-width: 300px;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
`

export const S = {
    Description,
    PhotoWrapper,
    Photo
}