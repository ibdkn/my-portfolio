import React from 'react';
import styled from "styled-components";
import { theme } from '../../styles/Theme';
import {Switch} from "../switch/Switch";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href={"#"}>{item}</Link>
                        </ListItem>
                    )
                })}
                <li>
                    <Switch />
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  
  ul {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: "#";
    color: ${theme.colors.accent};
  }
`

const Link = styled.a`
  color: ${theme.colors.secondaryColor};
  
  &:hover {
    color: ${theme.colors.primaryColor};
  }
`