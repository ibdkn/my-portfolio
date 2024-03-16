import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const Fact = (props: { factsItems: Array<string> }) => {
    return (
        <StyledFact>
            {props.factsItems.map((item, index) => {
                return (
                    <FactWrapper key={index}>
                        <Text>{item}</Text>
                    </FactWrapper>
                )
            })}
        </StyledFact>
    );
};

const StyledFact = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const FactWrapper = styled.div`
  padding: 8px;
  border: 1px solid ${theme.colors.secondaryColor};
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`
