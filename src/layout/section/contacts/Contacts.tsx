import React from 'react';
import {StyledTitle} from "../../../components/StyledTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { Social } from '../../../components/social/Social';
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles"


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={"contacts"}>
            <Container>
                <StyledTitle titleType={"section"} lineWidth={"127px"}>contacts</StyledTitle>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} gap={"20px"}>
                    <S.Description>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </S.Description>
                    <S.MessageBlock>
                        <S.Title>Message me here</S.Title>
                        <FlexWrapper direction={"column"} gap={"8px"}>
                            <Social iconId={"telegram"} width={"32"} height={"32"} viewBox={"0 0 32 32"} text={"@IraKochka"}/>
                            <Social iconId={"email"} width={"32"} height={"32"} viewBox={"0 0 32 32"} text={"bdkn.i@yandex.ru"}/>
                        </FlexWrapper>
                    </S.MessageBlock>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
