import React from 'react';
import styled from "styled-components";

export const Movement = (props: { title: string }) => {
    return (
        <MovementLink href={"#"}>{props.title}</MovementLink>
    );
};

const MovementLink = styled.a`
  font-weight: 500;
  font-size: 16px;
`
