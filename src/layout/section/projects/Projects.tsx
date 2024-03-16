import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Movement} from '../../../components/movement/Movement';
import {StyledTitle} from "../../../components/StyledTitle";
import {Project} from './project/Project';
import skillImage1 from '../../../assets/images/projects/skill-1.png'
import skillImage2 from '../../../assets/images/projects/skill-2.png'
import skillImage3 from '../../../assets/images/projects/skill-3.png'
import {Container} from "../../../components/Container";
import {S} from "./Projects_Styles"

const projectsData = [
    {
        src: skillImage1,
        technologies: ["HTML", "SCSS", "Python", "Flask"],
        title: "ChertNodes",
        description: "Minecraft servers hosting"
    },
    {
        src: skillImage2,
        technologies: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
        title: "ProtectX",
        description: "Discord anti-crash bot"
    },
    {
        src: skillImage3,
        technologies: ["CSS", "Express", "Node.js"],
        title: "Kahoot Answers Viewer",
        description: "Get answers to your kahoot quiz"
    },
]

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <S.ProjectsWrapper>
                    <StyledTitle titleType={"section"} lineWidth={"511px"}>projects</StyledTitle>
                    <Movement title={"View all ~~>"}/>
                </S.ProjectsWrapper>
                <FlexWrapper justify={"center"} align={"flex-start"} gap={"16px"} wrap={"wrap"}>
                    {projectsData.map((project, index) => {
                        return <Project src={project.src}
                                        technologies={project.technologies}
                                        title={project.title}
                                        description={project.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};




