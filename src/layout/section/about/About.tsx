import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/about/about.png"
import {StyledButton} from "../../../components/Button";
import {Movement} from "../../../components/movement/Movement";
import { Container } from '../../../components/Container';
import {theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle>about-me</SectionTitle>
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
  
  &::before {
    content: "";
    width: 271px;
    height: 1px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    left: 44px;
    bottom: 0;
  }
`

const Photo = styled.img`

`

