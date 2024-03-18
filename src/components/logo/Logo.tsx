import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "./Logo_Styles"
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <S.LogoWrapper onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={'logo'} width={'16'} height={'16'}/>
            <S.LogoName>Bdkni</S.LogoName>
        </S.LogoWrapper>
    );
};

