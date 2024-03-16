import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "./Switch_Styles"

export const Switch: React.FC = () => {
    return (
        <S.Switch>
            <S.Language>EN</S.Language>
            <Icon iconId={'SwitchArrow'} width={'30'} height={'30'} viewBox={"0 -7 30 30"}/>
        </S.Switch>
    );
};



