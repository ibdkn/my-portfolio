import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {SocialLink} from '../../components/SocialLink';
import {S} from "./Foter_Styles"

const socialItemsData = [
    {
        iconId: "github"
    },
    {
        iconId: "discord"
    },
    {
        iconId: "instagram"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"} gap={"20px"}>
                    <S.Info>
                        <FlexWrapper align={"center"} gap={"24px"}>
                            <Logo/>
                            {/*<S.WebsiteAddress>elias@elias-dev.ml</S.WebsiteAddress>*/}
                        </FlexWrapper>
                        <S.Text>
                            Front-end developer
                        </S.Text>
                    </S.Info>
                    <S.Media>
                        <S.MediaTitle>Media</S.MediaTitle>
                        <FlexWrapper justify={"center"} align={"center"} gap={"8px"}>
                            {socialItemsData.map((socialItem, index) => {
                                return (
                                    <SocialLink href={"#"} key={index}>
                                        <Icon iconId={socialItem.iconId} width={'32'} height={'32'} viewBox={"0 0 32 32"}/>
                                    </SocialLink>
                                )
                            })}
                        </FlexWrapper>
                    </S.Media>
                </FlexWrapper>
                <S.Copyright>© Copyright 2024. Made by Bdkni</S.Copyright>
            </Container>
        </S.Footer>
    );
};
