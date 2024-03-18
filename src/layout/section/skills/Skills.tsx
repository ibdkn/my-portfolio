import React from 'react';
import {StyledTitle} from "../../../components/StyledTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"

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

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <StyledTitle titleType={"section"} lineWidth={"239px"}>skills</StyledTitle>
                <FlexWrapper justify={"flex-end"} align={"flex-start"}>
                    <S.SkillsWrapper>
                        {skillsData.map((skill, index) => {
                            return <Skill key={index}
                                          title={skill.title}
                                          technologies={skill.technologies}/>
                        })}
                    </S.SkillsWrapper>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};