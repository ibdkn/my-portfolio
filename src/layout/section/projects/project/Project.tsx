import React from 'react';
import styled from "styled-components";
import {StyledButton} from "../../../../components/Button";
import {Movement} from "../../../../components/movement/Movement";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

type ProjectPropsType = {
    src: string,
    technologies: string,
    title: string,
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Photo src={props.src} alt=""/>
            <Technologies>{props.technologies}</Technologies>
            <InfoWrapper>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <StyledButton>
                    <Movement title={"Live <~>"}/>
                </StyledButton>
            </InfoWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 332px;
  width: 100%;
  border: 1px solid ${theme.colors.secondaryColor};
`

const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`

const Technologies = styled.p`
  padding: 8px;
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
  border-bottom: 1px solid ${theme.colors.secondaryColor};
`

const InfoWrapper = styled.div`
  padding: 16px;
`

const Title = styled.h3`
  ${font({weight: 500, Fmax: 24, Fmin: 20})};
`

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
  margin: 16px 0;
`
