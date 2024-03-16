import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/StyledTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/about/about.png"
import {StyledButton} from "../../../components/Button";
import {Movement} from "../../../components/movement/Movement";
import { Container } from '../../../components/Container';
import {theme} from "../../../styles/Theme";
import dotsGroup from "../../../assets/images/bgElements/dots-group.svg";
import dots from "../../../assets/images/bgElements/dots.svg";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <StyledTitle titleType={"section"} lineWidth={"326px"}>about-me</StyledTitle>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <FlexWrapper direction={"column"}>
                        <Description>
                            <p>
                                Hello, i’m Elias!
                            </p>
                            <p>
                                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                                websites from scratch and raise them into modern user-friendly web experiences.
                            </p>
                            <p>
                                Transforming my creativity and knowledge into a websites has been my passion for over a
                                year. I have been helping various clients to establish their presence online. I always
                                strive to learn about the newest technologies and frameworks.
                            </p>
                        </Description>
                        <StyledButton>
                            <Movement title={"Read more ~>"}/>
                        </StyledButton>
                    </FlexWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
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

const PhotoWrapper = styled.div`
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
    width: 271px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 44px;
    bottom: 2px;

    @media ${theme.media.mobile} {
      width: 100%;
      left: 0;
    }
  }
`

const Photo = styled.img`
  @media ${theme.media.mobile} {
    max-width: 250px;
  }
`
