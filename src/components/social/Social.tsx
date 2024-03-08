import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

type SocialPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    text: string
}

export const Social = (props: SocialPropsType) => {
    return (
        <StyledSocial href={"#"}>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <Name>{props.text}</Name>
        </StyledSocial>
    );
};

const Name = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`

const StyledSocial = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ABB2BF;

  &:hover,
  &:hover ${Name} {
    color: ${theme.colors.primaryColor};
  }
`
