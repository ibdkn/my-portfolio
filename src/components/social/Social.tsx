import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "./Social_Styles"

type SocialPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    text: string
}

export const Social: React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <S.Social>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <S.Name>{props.text}</S.Name>
        </S.Social>
    );
};

