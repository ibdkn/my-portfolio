import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import quotes from "../../../assets/images/quote/quotes.svg";
import {font} from "../../../styles/Common";

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
  padding-top: 5px;
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

    @media ${theme.media.container} {
      right: calc(50% - 691px);
    }
  }
`

const BlockquoteWrapper = styled.div`
  
`

const Blockquote = styled.blockquote`
  max-width: max-content;
  width: 100%;
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

const Text = styled.p`
  width: 100%;
  padding: 32px;
  ${font({weight: 500, Fmax: 24, Fmin: 18})};
  border: 1px solid ${theme.colors.secondaryColor};

  @media ${theme.media.tablet} {
    font-size: 18px;
  }
`

const Author = styled.footer`
  padding: 16px;
  ${font({weight: 400, Fmax: 24, Fmin: 18})};
  border: 1px solid ${theme.colors.secondaryColor};
  border-top: none;
`

