import React from 'react';
import styled from "styled-components";
import {StyledTitle} from "../../../components/StyledTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import elementsBg from "../../../assets/images/skills/elements.svg"
import {theme} from "../../../styles/Theme";

// const SkillsData = [
//     {
//         title: "Frameworks",
//         technologies: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]
//     },
//     {
//         title: "Tools",
//         technologies: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"]
//     },
//     {
//         title: "Languages",
//         technologies: ["TypeScript", "Lua", "Python", "JavaScript"]
//     },
//     {
//         title: "Other",
//         technologies: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]
//     },
//     {
//         title: "Databases",
//         technologies: ["SQLite", "PostgreSQL", "Mongo"]
//     },
// ]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <StyledTitle titleType={"section"} lineWidth={"239px"}>skills</StyledTitle>
                <FlexWrapper justify={"flex-end"} align={"flex-start"}>
                    <SkillsWrapper>
                        <Skill title={"Tools"} technologies={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"} />
                        <Skill title={"Frameworks"} technologies={"React Vue Disnake Discord.js Flask Express.js"} />
                        <Skill title={"Databases"} technologies={"SQLite PostgreSQL Mongo"} />
                        <Skill title={"Other"} technologies={"HTML CSS EJS SCSS REST Jinja"} />
                        <Skill title={"Languages"} technologies={"TypeScript Lua Python JavaScript"} />
                    </SkillsWrapper>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  padding: 54px 0;
  
  ${Container} {
    background-image: url(${elementsBg});
    background-repeat: no-repeat;
    background-size: 349px, contain;
    background-position: top 54px left 32px;
    
    @media ${theme.media.tablet} {
      background-image: none;
    }
    
    >${FlexWrapper} {
      @media ${theme.media.desktop} {
        
        justify-content: center;
      }
    }
  }
`

const SkillsWrapper = styled.div`
  max-width: 608px;
  margin-left: auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  height: 290px;

  @media ${theme.media.tablet} {
    max-width: 100%;
    height: auto;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    margin: 0;
  }
`