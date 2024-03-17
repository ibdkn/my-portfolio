import React from 'react';
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
]

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
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

