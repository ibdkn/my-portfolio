import React from 'react';
import {StyledTitle} from "./StyledTitle";
import styled from "styled-components";

type PageInfoPropsType = {
    title: string,
    description: string
}

export const PageInfo = (props: PageInfoPropsType) => {
    return (
        <StyledPageInfo>
            <StyledTitle titleType={"page"}>{props.title}</StyledTitle>
            <Description>
                {props.description}
            </Description>
        </StyledPageInfo>
    );
};

const StyledPageInfo = styled.section`
  padding: 35px 0;
`

const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #fff;
`