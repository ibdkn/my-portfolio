import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from '../../../assets/images/main/main.png'
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.Info>
                        <S.MainTitle>
                            Elias is a <span>web designer</span> and <span>front-end developer</span>
                        </S.MainTitle>
                        <S.Description>
                            He crafts responsive websites where technologies meet creativity
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

