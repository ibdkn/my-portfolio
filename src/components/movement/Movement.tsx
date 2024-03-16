import React from 'react';
import styled from "styled-components";

export const Movement: React.FC<{ title: string }> = (props: { title: string }) => {
    return (
        <MovementLink href={"#"}>{props.title}</MovementLink>
    );
};

const MovementLink = styled.a`

`
