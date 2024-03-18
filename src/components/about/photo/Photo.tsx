import React from 'react';
import photo from "../../../assets/images/about/about.png";
import {S} from "../About_Styles"

export const Photo = () => {
    return (
        <S.PhotoWrapper>
            <S.Photo src={photo} alt=""/>
        </S.PhotoWrapper>
    );
};
