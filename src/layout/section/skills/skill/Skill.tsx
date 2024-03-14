import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    title: string,
    technologies: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Title>{props.title}</Title>
            <Technologies>{props.technologies}</Technologies>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 192px;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid ${theme.colors.secondaryColor};
  margin-bottom: 5px;

  @media ${theme.media.tablet} {
  margin-bottom: 0;
  }
`

const Title = styled.h3`
  padding: 8px;
  border-bottom: 1px solid ${theme.colors.secondaryColor};
`

const Technologies = styled.p`
  padding: 8px;
  color: ${theme.colors.secondaryColor};
`