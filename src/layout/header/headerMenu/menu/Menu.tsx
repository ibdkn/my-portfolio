import React from 'react';
import {Switch} from "../../../../components/switch/Switch";
import {S} from "../HeaderMenu_Styles"

const menuItems = [
    {
        title: "home",
        href: "home"
    },
    {
        title: "projects",
        href: "projects"
    },
    {
        title: "skills",
        href: "skills"
    },
    {
        title: "about-me",
        href: "about-me"
    },
    {
        title: "contacts",
        href: "contacts"
    },
];

export const Menu: React.FC = () => {
    return (
        <ul>
            {menuItems.map((item, index) => {
                return (
                    <S.ListItem key={index}>
                        <S.NavLink activeClass="active" to={item.href} smooth={true} spy={true} offset={-25}>{item.title}</S.NavLink>
                    </S.ListItem>
                )
            })}
            {/*<li>*/}
            {/*    <Switch />*/}
            {/*</li>*/}
        </ul>
    );
};
