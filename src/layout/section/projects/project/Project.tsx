import React from 'react';
import {StyledButton} from "../../../../components/Button";
import {Movement} from "../../../../components/movement/Movement";
import { Technologies } from '../../../../components/technologies/Technologies';
import {S} from "../Projects_Styles"

type ProjectPropsType = {
    src?: string,
    technologies: Array<string>,
    title: string,
    description: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            {props.src ? <S.Photo src={props.src} alt=""/> : ''}
            <Technologies technologiesItems={props.technologies}/>
            <S.InfoWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <StyledButton>
                    <Movement title={"Live <~>"}/>
                </StyledButton>
            </S.InfoWrapper>
        </S.Project>
    );
};


