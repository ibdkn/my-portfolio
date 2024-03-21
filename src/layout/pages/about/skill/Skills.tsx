import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import React from "react";
import {Skill} from "../../../section/skills/skill/Skill";
import {StyledTitle} from "../../../../components/StyledTitle";
import {theme} from "../../../../styles/Theme";

const skillsData = [
    {
        title: "Frameworks",
        technologies: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]
    },
    {
        title: "Tools",
        technologies: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"]
    },
    {
        title: "Languages",
        technologies: ["TypeScript", "Lua", "Python", "JavaScript"]
    },
    {
        title: "Other",
        technologies: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]
    },
    {
        title: "Databases",
        technologies: ["SQLite", "PostgreSQL", "Mongo"]
    },
]

export const Skills = () => {
    return (
        <StyledSkills>
            <StyledTitle titleType={"section"}>skills</StyledTitle>
            <FlexWrapper justify={"space-between"}>
                {skillsData.map((skill, index) => {
                    return <Skill key={index}
                                  title={skill.title}
                                  technologies={skill.technologies}/>
                })}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
  
  > ${FlexWrapper} {
    @media screen and (max-width: 1050px) {
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;
    }
  }
`

