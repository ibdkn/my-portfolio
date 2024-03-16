import React from 'react';
import {Project} from "../../../layout/section/projects/project/Project";
import skillImage1 from "../../../assets/images/projects/skill-1.png";
import skillImage2 from "../../../assets/images/projects/skill-2.png";
import skillImage3 from "../../../assets/images/projects/skill-3.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {StyledTitle} from "../../../components/StyledTitle";

export const CompleteApps = () => {
    return (
        <StyledCompleteApps>
            <StyledTitle titleType={"section"}>complete-apps</StyledTitle>
            <FlexWrapper justify={"flex-start"} align={"flex-start"} gap={"16px"} wrap={"wrap"}>
                <Project src={skillImage1} technologies={"HTML SCSS Python Flask"} title={"ChertNodes"} description={"Minecraft servers hosting"}/>
                <Project src={skillImage2} technologies={"React Express Discord.js Node.js HTML SCSS Python Flask"} title={"ProtectX"} description={"Discord anti-crash bot"}/>
                <Project src={skillImage3} technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                <Project src={skillImage3} technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                <Project src={skillImage3} technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
            </FlexWrapper>
        </StyledCompleteApps>
    );
};

const StyledCompleteApps = styled.section`

`
