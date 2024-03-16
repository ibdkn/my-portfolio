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
                            With great power comes great electricity bill
                        </S.Text>
                        <S.Author>
                            - Dr. Who
                        </S.Author>
                    </S.Blockquote>
                </S.BlockquoteWrapper>

            </Container>
        </S.Quote>
    );
};

