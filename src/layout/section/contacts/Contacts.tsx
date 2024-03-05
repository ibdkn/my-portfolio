import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { Social } from '../../../components/social/Social';
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>contacts</SectionTitle>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Description>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </Description>
                    <MessageBlock>
                        <Title>Message me here</Title>
                        <FlexWrapper direction={"column"} gap={"15px"}>
                            <a href={"#"}>
                                <Social iconId={"telegram"} width={"23"} height={"23"} viewBox={"0 0 23 23"} text={"@Elias#3519"}/>
                            </a>
                            <a href={"#"}>
                                <Social iconId={"email"} width={"23"} height={"17"} viewBox={"0 0 23 17"} text={"elias@elias.me"}/>
                            </a>
                        </FlexWrapper>
                    </MessageBlock>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 30vh;

`

const Description = styled.p`
  max-width: 505px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`

const MessageBlock = styled.div`
  max-width: 204px;
  width: 100%;
  padding: 16px;
  border: 1px solid ${theme.colors.secondaryColor};
`

const Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 16px;
`
