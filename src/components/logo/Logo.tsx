import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo = () => {
    return (
        <StyledLogoWrapper href={"#"}>
            <Icon iconId={'logo'} width={'16'} height={'16'}/>
            <StyledLogoName>Elias</StyledLogoName>
        </StyledLogoWrapper>
    );
};

const StyledLogoWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`

const StyledLogoName = styled.span`
  font-weight: 700;
`
