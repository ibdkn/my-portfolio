import React from 'react';
import {Technologies} from "../../../../components/technologies/Technologies";
import {S} from "../Skills_Styles"

type SkillPropsType = {
    title: string,
    technologies: Array<string>
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <S.Title>{props.title}</S.Title>
            <Technologies technologiesItems={props.technologies}/>
        </S.Skill>
    );
};