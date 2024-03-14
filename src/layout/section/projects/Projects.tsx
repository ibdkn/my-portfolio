import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { Movement } from '../../../components/movement/Movement';
import {StyledTitle} from "../../../components/StyledTitle";
import { Project } from './project/Project';
import skillImage1 from '../../../assets/images/projects/skill-1.png'
import skillImage2 from '../../../assets/images/projects/skill-2.png'
import skillImage3 from '../../../assets/images/projects/skill-3.png'
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <ProjectsWrapper>
                    <StyledTitle titleType={"section"} lineWidth={"511px"}>projects</StyledTitle>
                    <Movement title={"View all ~~>"}/>
                </ProjectsWrapper>
                <FlexWrapper justify={"center"} align={"flex-start"} gap={"16px"} wrap={"wrap"}>
                    <Project src={skillImage1} technologies={"HTML SCSS Python Flask"} title={"ChertNodes"} description={"Minecraft servers hosting"}/>
                    <Project src={skillImage2} technologies={"React Express Discord.js Node.js HTML SCSS Python Flask"} title={"ProtectX"} description={"Discord anti-crash bot"}/>
                    <Project src={skillImage3} technologies={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  padding-bottom: 54px;
  overflow-x: hidden;

  position: relative;
  z-index: 0;
  
  h2 {
    margin: 0;
  }

  &::before {
    content: "";
    width: 155px;
    height: 155px;
    border: 1px solid ${theme.colors.secondaryColor};

    position: absolute;
    right: -87px;
    bottom: 147px;
    z-index: -1;

    @media ${theme.media.container} {
      right: calc(50% - 770px);
    }

    @media ${theme.media.desktop} {
      display: none;
    }
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`



