import React from 'react';
import {Container} from "../../components/Container";
import {SocialLink} from "../../components/SocialLink";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {S} from "./Header_Styles"

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
                {socialItemsData.map((socialItem, index) => {
                    return (
                        <SocialLink href={"#"} key={index}>
                            <Icon iconId={socialItem.iconId} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                        </SocialLink>
                    )
                })}
            </S.SocialFixed>
            <Container>
                <S.HeaderWrapper>
                    <Logo/>

                    {width <= breakpoint ? <MobileMenu/> : <DesktopMenu/>}
                </S.HeaderWrapper>
            </Container>
        </S.Header>
    );
};


