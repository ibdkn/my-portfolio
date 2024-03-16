import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/StyledTitle";
import { Fact } from './fact/Fact';

const FactsData = [
    "I like winter more than summer",
    "I often bike with my friends",
    "I like pizza and pasta",
    "I was in Egypt, Poland and Turkey",
    "My favorite movie is The Green Mile",
    "I am still in school",
    "I don’t have any siblings"
];

export const Facts = () => {
    return (
        <StyledFacts>
            <StyledTitle titleType={"section"}>my-fun-facts</StyledTitle>
            <Fact factsItems={FactsData}/>
        </StyledFacts>
    );
};

const StyledFacts = styled.div`
  max-width: 615px;
`

