import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import elementsBg from "../../../assets/images/skills/elements.svg"

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <FlexWrapper justify={"flex-end"} align={"flex-start"}>
                    <SkillsWrapper>
                        <Skill title={"Languages"} technologies={"TypeScript Lua Python JavaScript"} />
                        <Skill title={"Databases"} technologies={"SQLite PostgreSQL Mongo"} />
                        <Skill title={"Tools"} technologies={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"} />
                        <Skill title={"Other"} technologies={"HTML CSS EJS SCSS REST Jinja"} />
                        <Skill title={"Frameworks"} technologies={"React Vue Disnake Discord.js Flask Express.js"} />
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
  }
`

const SkillsWrapper = styled.div`
  max-width: 608px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 16px;
  flex-wrap: wrap;
`

const Image = styled.img`
  
`