import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Switch} from "../../components/switch/Switch";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/icon/Icon";
import {SocialLink} from "../../components/SocialLink";

const items = ["home", "projects", "skills", "about-me", "contacts"];

export const Header = () => {
    return (
        <StyledHeader>
            <SocialFixed>
                <SocialLink href={"#"}>
                    <Icon iconId={'github'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                </SocialLink>
                <SocialLink href={"#"}>
                    <Icon iconId={'telegram'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                </SocialLink>
                {/*<SocialLink href={"#"}>*/}
                {/*    <Icon iconId={'instagram'} width={'20'} height={'20'} viewBox={"0 -2 20 20"}/>*/}
                {/*</SocialLink>*/}
            </SocialFixed>
            <Container>
                <HeaderWrapper>
                    <Logo/>

                    <FlexWrapper align={"center"} gap={"32px"}>
                        <Menu menuItems={items}/>
                        <Switch />
                    </FlexWrapper>
                </HeaderWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.primaryBg};
  z-index: 99999;
`

const SocialFixed = styled.div`
  position: fixed;
  top: 205px;
  left: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: "";
    width: 1px;
    height: 191px;
    background-color: ${theme.colors.primaryColor};
    
    position: absolute;
    top: calc(0% - 205px);
    left: 50%;
    transform: translateX(-50%);
  }
`

const HeaderWrapper = styled.div`
  padding: 32px 0 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
