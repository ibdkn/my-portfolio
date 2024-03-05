import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Icon iconId={"bg"} width={"349"} height={"283"} viewBox={"0 0 349 283"}/>
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