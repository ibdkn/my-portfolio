import React from 'react';
import Typewriter from 'typewriter-effect';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from '../../../assets/images/main/main.png'
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.Info>
                        <S.Description>
                            Hi there!
                        </S.Description>
                        <S.Name>
                            My name is Irina
                        </S.Name>
                        <S.MainTitle>
                            <span>I'm a</span>
                            <span>
                                <p>front-end developer</p>
                                <Typewriter
                                    options={{
                                        strings: ['front-end developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </S.MainTitle>
                        <S.Description>
                            I craft responsive websites where technologies meet creativity
                        </S.Description>
                        <StyledButton>Contact me!!</StyledButton>
                    </S.Info>
                    <div>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                        <S.SubtextWrapper>
                            <S.Subtext>
                                Currently working on <span>Portfolio</span>
                            </S.Subtext>
                        </S.SubtextWrapper>
                    </div>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

