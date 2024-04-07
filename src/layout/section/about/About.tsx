import React from 'react';
import {StyledTitle} from "../../../components/StyledTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledButton} from "../../../components/Button";
import {Movement} from "../../../components/movement/Movement";
import { Container } from '../../../components/Container';
import {S} from "./About_Styles"
import {Description} from "../../../components/about/description/Description";
import {Photo} from "../../../components/about/photo/Photo";

export const About: React.FC = () => {
    return (
        <S.About id={"about-me"}>
            <Container>
                <StyledTitle titleType={"section"} lineWidth={"326px"}>about-me</StyledTitle>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <FlexWrapper direction={"column"}>
                        <Description/>
                        {/*<StyledButton>*/}
                        {/*    <Movement title={"Read more ~>"}/>*/}
                        {/*</StyledButton>*/}
                    </FlexWrapper>
                   <Photo/>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};



