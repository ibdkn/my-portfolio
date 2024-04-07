import React from 'react';
import {StyledButton} from "../../../../components/Button";
import {Movement} from "../../../../components/movement/Movement";
import { Technologies } from '../../../../components/technologies/Technologies';
import {S} from "../Projects_Styles"
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    src?: string,
    technologies: Array<string>,
    title: string,
    description: string,
    link?: string
    live?: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            {props.src ? <S.Photo src={props.src} alt=""/> : ''}
            <Technologies technologiesItems={props.technologies}/>
            <S.InfoWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <FlexWrapper gap={"10px"}>
                    <StyledButton>
                        <Movement title={"Link <~>"} href={props.link}/>
                    </StyledButton>
                    {props.live ? <StyledButton>
                        <Movement title={"Live <~>"} href={props.live}/>
                    </StyledButton> : ''}
                </FlexWrapper>
            </S.InfoWrapper>
        </S.Project>
    );
};


