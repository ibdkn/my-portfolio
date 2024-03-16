import React from 'react';
import {StyledTitle} from "../../../components/StyledTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/about/about.png"
import {StyledButton} from "../../../components/Button";
import {Movement} from "../../../components/movement/Movement";
import { Container } from '../../../components/Container';
import {S} from "./About_Styles"

export const About: React.FC = () => {
    return (
        <S.About>
            <Container>
                <StyledTitle titleType={"section"} lineWidth={"326px"}>about-me</StyledTitle>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <FlexWrapper direction={"column"}>
                        <S.Description>
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
                        </S.Description>
                        <StyledButton>
                            <Movement title={"Read more ~>"}/>
                        </StyledButton>
                    </FlexWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};



