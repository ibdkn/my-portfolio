import React from 'react';
import styled from "styled-components";
import { theme } from '../../styles/Theme';

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
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 42px;
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