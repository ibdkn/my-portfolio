import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Quote = () => {
    return (
        <StyledQuote>
            <Container>
                <BlockquoteWrapper>
                    <Blockquote>
                        {/*<QuoteIcon>*/}
                        {/*    <Icon iconId={'quote'} width={'42'} height={'29'} viewBox={"0 0 42 29"}/>*/}
                        {/*</QuoteIcon>*/}
                        {/*<QuoteIcon>*/}
                        {/*    <Icon iconId={'quote'} width={'42'} height={'29'} viewBox={"0 0 42 29"}/>*/}
                        {/*</QuoteIcon>*/}
                        <Text>
                            With great power comes great electricity bill
                        </Text>
                        <Author>
                            - Dr. Who
                        </Author>
                    </Blockquote>
                </BlockquoteWrapper>

            </Container>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
  padding-top: 0;
`

const BlockquoteWrapper = styled.div`
  //padding: 112px 0 74px;
`

const Blockquote = styled.blockquote`
  max-width: 714px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  
  position: relative;
`

// const QuoteIcon = styled.div`
//   position: absolute;
//   background-color: ${theme.colors.secondaryBg};
//
//   &:first-child {
//     top: -14px;
//     left: 11px;
//   }
//
//   &:last-child {
//     bottom: 0;
//     right: 16px;
//   }
// `

const Text = styled.p`
  padding: 32px;
  font-weight: 500;
  font-size: 24px;
  border: 1px solid ${theme.colors.secondaryColor};
`

const Author = styled.footer`
  padding: 16px;
  font-weight: 400;
  font-size: 24px;
  border: 1px solid ${theme.colors.secondaryColor};
  border-top: none;
`

