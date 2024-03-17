import React from 'react';
import {Container} from "../../../components/Container";
import {S} from "./Quote_Styles"

export const Quote: React.FC = () => {
    return (
        <S.Quote>
            <Container>
                <S.BlockquoteWrapper>
                    <S.Blockquote>
                        <S.Text>
                            Nothing in this world, that’s worth having comes easy.
                        </S.Text>
                        <S.Author>
                            - Bob Kelso
                        </S.Author>
                    </S.Blockquote>
                </S.BlockquoteWrapper>

            </Container>
        </S.Quote>
    );
};

