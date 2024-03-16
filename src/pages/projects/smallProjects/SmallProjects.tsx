import React from 'react';
import {Project} from "../../../layout/section/projects/project/Project";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {StyledTitle} from "../../../components/StyledTitle";

export const SmallProjects = () => {
    return (
        <StyledSmallProjects>
            <StyledTitle titleType={"section"}>small-projects</StyledTitle>
            <FlexWrapper justify={"flex-start"} align={"flex-start"} gap={"16px"} wrap={"wrap"}>
                <Project technologies={"HTML SCSS Python Flask"} title={"ChertNodes"} description={"Minecraft servers hosting"}/>
                <Project technologies={"React Express Discord.js Node.js HTML SCSS Python Flask"} title={"ProtectX"} description={"Discord anti-crash bot"}/>
                <Project technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                <Project technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                <Project technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                <Project technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                <Project technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                <Project technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                <Project technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
            </FlexWrapper>
        </StyledSmallProjects>
    );
};

const StyledSmallProjects = styled.section`

`
