import React from 'react';
import {S} from "./Technologies_Styles"
export const Technologies = (props: {technologiesItems: Array<string>}) => {
    return (
        <S.Technologies>
            {
                props.technologiesItems.map((technology, index) => {
                    return <S.Technology key={index}>{technology}</S.Technology>
                })
            }
        </S.Technologies>
    );
};

