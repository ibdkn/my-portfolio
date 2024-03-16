import React from 'react';
import {Project} from "../../../layout/section/projects/project/Project";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {StyledTitle} from "../../../components/StyledTitle";

const smallProjectsData = [
    {
        technologies: ["Discord.js", "TS", "JS"],
        title: "Bot boilerplate",
        description: "Start creating scalable discord.js bot with typescript in seconds"
    },
    {
        technologies: ["VUE", "CSS", "JS"],
        title: "My blog",
        description: "Front-end of my future blog website written in vue"
    },
    {
        technologies: ["Figma"],
        title: "Chess pro",
        description: "Figma landing page about service for viewing chess tournaments"
    },
    {
        technologies: ["Figma"],
        title: "Crash protect website",
        description: "Figma template for website about anti-raid, anti-crash discord bot"
    },
    {
        technologies: ["HTML", "CSS"],
        title: "CSS expirements",
        description: "Collection of my different little projects in css"
    },
    {
        technologies: ["Lua", "NeoVim"],
        title: "Web Dev nvim config",
        description: "Config for neovim perfect for web developer"
    },
]

export const SmallProjects = () => {
    return (
        <StyledSmallProjects>
            <StyledTitle titleType={"section"}>small-projects</StyledTitle>
            <FlexWrapper justify={"flex-start"} align={"flex-start"} gap={"16px"} wrap={"wrap"}>
                {smallProjectsData.map((project, index) => {
                    return (
                        <Project key={index}
                                 technologies={project.technologies}
                                 title={project.title}
                                 description={project.description}/>
                    )
                })}
            </FlexWrapper>
        </StyledSmallProjects>
    );
};

const StyledSmallProjects = styled.section`

`
