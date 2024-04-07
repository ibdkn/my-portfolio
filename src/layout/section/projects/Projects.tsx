import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Movement} from '../../../components/movement/Movement';
import {StyledTitle} from "../../../components/StyledTitle";
import {Project} from './project/Project';
import skillImage1 from '../../../assets/images/projects/project-1.png'
import skillImage2 from '../../../assets/images/projects/project-2.png'
import skillImage3 from '../../../assets/images/projects/project-3.png'
import {Container} from "../../../components/Container";
import {S} from "./Projects_Styles"

const projectsData = [
    {
        src: skillImage1,
        technologies: ["HTML", "LESS", "JS", "JQuery", "Gulp"],
        title: "Landing Page",
        description: "An adaptive single-page landing site, written using a modern technology stack.",
        link: "https://github.com/ibdkn/macaroons",
        live: "https://ibdkn.github.io/macaroons/"
    },
    {
        src: skillImage2,
        technologies: ["HTML", "SCSS", "JS", "JQuery", "Gulp"],
        title: "Landing Page",
        description: "An adaptive single-page landing site, written using a modern technology stack.",
        link: "https://github.com/ibdkn/boom-burger",
        live: "https://ibdkn.github.io/boom-burger/"
    },
    {
        src: skillImage3,
        technologies: ["React", "StyledComponent", "JSX", "TypeScript"],
        title: "Portfolio",
        description: "An adaptive single-page landing site, written using a modern technology stack.",
        link: "https://github.com/ibdkn/my-portfolio",
        live: ''
    },
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={"projects"}>
            <Container>
                <S.ProjectsWrapper>
                    <StyledTitle titleType={"section"} lineWidth={"511px"}>projects</StyledTitle>
                    {/*<Movement title={"View all ~~>"}/>*/}
                </S.ProjectsWrapper>
                <FlexWrapper justify={"center"} align={"flex-start"} gap={"16px"} wrap={"wrap"}>
                    {projectsData.map((project, index) => {
                        return <Project key={index}
                                        src={project.src}
                                        technologies={project.technologies}
                                        title={project.title}
                                        description={project.description}
                                        link={project.link}
                                        live={project.live}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};




