import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { Movement } from '../../../components/movement/Movement';
import {SectionTitle} from "../../../components/SectionTitle";
import { Project } from './project/Project';
import skillImage1 from '../../../assets/images/projects/skill-1.png'
import skillImage2 from '../../../assets/images/projects/skill-2.png'
import skillImage3 from '../../../assets/images/projects/skill-3.png'
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <ProjectsWrapper>
                    <SectionTitle>projects</SectionTitle>
                    <Movement title={"View all ~~>"}/>
                </ProjectsWrapper>
                <FlexWrapper justify={"center"} align={"flex-start"} gap={"16px"}>
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
  
  h2 {
    margin: 0;
  }
`
const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`


