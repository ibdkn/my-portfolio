import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {Icon} from "../../components/icon/Icon";
import {SocialLink} from "../../components/SocialLink";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";

const menuItems = ["home", "projects", "skills", "about-me", "contacts"];

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <S.SocialFixed>
                <SocialLink href={"#"}>
                    <Icon iconId={'github'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                </SocialLink>
                <SocialLink href={"#"}>
                    <Icon iconId={'telegram'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                </SocialLink>
                {/*<SocialLink href={"#"}>*/}
                {/*    <Icon iconId={'instagram'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>*/}
                {/*</SocialLink>*/}
            </S.SocialFixed>
            <Container>
                <S.HeaderWrapper>
                    <Logo/>

                    {width <= breakpoint ? <MobileMenu menuItems={menuItems}/> : <DesktopMenu menuItems={menuItems}/>}
                </S.HeaderWrapper>
            </Container>
        </S.Header>
    );
};


