import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import { SocialLink } from '../../components/SocialLink';
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} gap={"20px"}>
                    <Info>
                        <FlexWrapper align={"center"} gap={"24px"}>
                            <Logo/>
                            <WebsiteAddress>elias@elias-dev.ml</WebsiteAddress>
                        </FlexWrapper>
                        <Text>
                            Web designer and front-end developer
                        </Text>
                    </Info>
                    <Media>
                        <MediaTitle>Media</MediaTitle>
                        <FlexWrapper justify={"center"} align={"center"} gap={"8px"}>
                            <SocialLink href={"#"}>
                                <Icon iconId={'github'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                            </SocialLink>
                            <SocialLink href={"#"}>
                                <Icon iconId={'discord'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                            </SocialLink>
                            {/*<SocialLink href={"#"}>*/}
                            {/*    <Icon iconId={'instagram'} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>*/}
                            {/*</SocialLink>*/}
                        </FlexWrapper>
                    </Media>
                </FlexWrapper>
                <Copyright>© Copyright 2022. Made by Elias</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 32px 0;
  border-top: 1px solid ${theme.colors.secondaryColor};
`

const Info = styled.div`
  
`

const WebsiteAddress = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`

const Text = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
`

const Media = styled.div`

`

const MediaTitle = styled.h3`
  ${font({weight: 500, Fmax: 24, Fmin: 18})};
  margin-bottom: 12px;
`

const Copyright = styled.p`
  margin-top: 48px;
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
  text-align: center;
  
  @media ${theme.media.mobile} {
    margin-top: 30px;
  }
`

