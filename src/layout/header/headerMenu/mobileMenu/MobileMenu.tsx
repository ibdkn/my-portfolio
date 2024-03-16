import React from 'react';
import {SocialLink} from "../../../../components/SocialLink";
import {Icon} from "../../../../components/icon/Icon";
import { Menu } from '../menu/Menu';
import {S} from "../HeaderMenu_Styles"

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
                <S.Social>
                    <SocialLink href={"#"}>
                        <Icon iconId={'github'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                    </SocialLink>
                    <SocialLink href={"#"}>
                        <Icon iconId={'telegram'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                    </SocialLink>
                    {/*<SocialLink href={"#"}>*/}
                    {/*    <Icon iconId={'instagram'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>*/}
                    {/*</SocialLink>*/}
                </S.Social>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

