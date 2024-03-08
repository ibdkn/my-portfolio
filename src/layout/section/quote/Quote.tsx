import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import quotes from "../../../assets/images/quote/quotes.svg";

export const Quote = () => {
    return (
        <StyledQuote>
            <Container>
                <BlockquoteWrapper>
                    <Blockquote>
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
  overflow-x: hidden;
  position: relative;

  &::before {
    content: "";
    width: 91px;
    height: 91px;
    border: 1px solid ${theme.colors.secondaryColor};
    
    position: absolute;
    right: -9px;
    top: 14px;
    z-index: 1;
  }
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

  &::before {
    content: "";
    width: 42px;
    height: 29px;
    background-image: url(${quotes});
    background-size: 25px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${theme.colors.primaryBg};
    
    position: absolute;
    top: -10px;
    left: 19px;
  }

  &::after {
    content: "";
    width: 42px;
    height: 29px;
    background-image: url(${quotes});
    background-size: 25px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${theme.colors.primaryBg};
    
    position: absolute;
    bottom: 53px;
    right: 24px;
  }
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

