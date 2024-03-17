import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "./Logo_Styles"

export const Logo: React.FC = () => {
    return (
        <S.LogoWrapper href={"#"}>
            <Icon iconId={'logo'} width={'16'} height={'16'}/>
            <S.LogoName>Bdkni</S.LogoName>
        </S.LogoWrapper>
    );
};

