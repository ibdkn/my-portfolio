import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { Social } from '../../../components/social/Social';
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import dots from "../../../assets/images/bgElements/dots.svg"

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>contacts</SectionTitle>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} gap={"20px"}>
                    <Description>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </Description>
                    <MessageBlock>
                        <Title>Message me here</Title>
                        <FlexWrapper direction={"column"} gap={"8px"}>
                            <Social iconId={"telegram"} width={"32"} height={"32"} viewBox={"0 0 32 32"} text={"@Elias#3519"}/>
                            <Social iconId={"email"} width={"32"} height={"32"} viewBox={"0 0 32 32"} text={"elias@elias.me"}/>
                        </FlexWrapper>
                    </MessageBlock>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  overflow-x: hidden;
  
  position: relative;
  z-index: 0;
  
  &::after {
    content: "";
    width: 103px;
    height: 103px;
    background-image: url(${dots});
    background-size: cover;

    position: absolute;
    left: -51px;
    bottom: 85px;
    z-index: -1;

    @media ${theme.media.desktop} {
      display: none;
    }
  }
  
  ${Container} > ${FlexWrapper} {
    @media ${theme.media.desktop} {
      justify-content: center;
    }
  }

`

const Description = styled.p`
  max-width: 505px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`

const MessageBlock = styled.div`
  max-width: 209px;
  width: 100%;
  padding: 16px;
  border: 1px solid ${theme.colors.secondaryColor};
`

const Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 16px;
`

