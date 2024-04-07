import React from 'react';
import styled from "styled-components";

type MovementPropsType = {
    title: string
    href?: string
}

export const Movement: React.FC<MovementPropsType> = (props: MovementPropsType) => {
    return (
        <MovementLink href={props.href}>{props.title}</MovementLink>
    );
};

const MovementLink = styled.a`

`
