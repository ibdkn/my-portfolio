import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import { theme } from '../../styles/Theme';

export const Switch = () => {
    return (
        <SwitchStyled>
            <Language>EN</Language>
            <Icon iconId={'SwitchArrow'} width={'30'} height={'30'} viewBox={"0 -7 30 30"}/>
        </SwitchStyled>
    );
};

const SwitchStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  
  svg {
    color: ${theme.colors.secondaryColor};
  }

  &:hover p, &:hover svg {
    color: ${theme.colors.primaryColor};
  }
`

const Language = styled.p`
  color: ${theme.colors.secondaryColor};
`

