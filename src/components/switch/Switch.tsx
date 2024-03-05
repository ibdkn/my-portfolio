import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import { theme } from '../../styles/Theme';

export const Switch = () => {
    return (
        <FlexWrapper align={"center"} gap={"4px"}>
            <Language>EN</Language>
            <Icon iconId={'SwitchArrow'} width={'30'} height={'30'} viewBox={"0 -7 30 30"}/>
        </FlexWrapper>
    );
};

const Language = styled.p`
  color: ${theme.colors.secondaryColor};
  cursor: pointer;
  
  &:hover {
    color: ${theme.colors.primaryColor};
  }
`

