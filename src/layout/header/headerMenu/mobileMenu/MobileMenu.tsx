import React, {useState} from 'react';
import {SocialLink} from "../../../../components/SocialLink";
import {Icon} from "../../../../components/icon/Icon";
import { Menu } from '../menu/Menu';
import {S} from "../HeaderMenu_Styles"

const socialItemsData = [
    {
        iconId: "github"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "instagram"
    },
]

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen(false)} }>
                <Menu/>
                <S.Social>
                    {socialItemsData.map((socialItem, index) => {
                        return (
                            <SocialLink href={"#"} key={index}>
                                <Icon iconId={socialItem.iconId} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                            </SocialLink>
                        )
                    })}
                </S.Social>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

