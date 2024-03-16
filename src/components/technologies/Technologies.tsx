import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Technologies = (props: {technologiesItems: Array<string>}) => {
    return (
        <StyledTechnologies>
            {
                props.technologiesItems.map((technology, index) => {
                    return <Technology>{technology}</Technology>
                })
            }
        </StyledTechnologies>
    );
};

const StyledTechnologies = styled.ul`
  padding: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  border-bottom: 1px solid ${theme.colors.secondaryColor};
`

const Technology = styled.li`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`
