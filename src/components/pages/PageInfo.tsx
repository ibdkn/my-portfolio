import React from 'react';
import {StyledTitle} from "../StyledTitle";
import {S} from "./PageInfo_Styles"

type PageInfoPropsType = {
    title: string,
    description: string
}

export const PageInfo: React.FC<PageInfoPropsType> = (props: PageInfoPropsType) => {
    return (
        <S.PageInfo>
            <StyledTitle titleType={"page"}>{props.title}</StyledTitle>
            <S.Description>
                {props.description}
            </S.Description>
        </S.PageInfo>
    );
};
