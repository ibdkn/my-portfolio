import React from 'react';
import styled from "styled-components";
import {font} from "../../styles/Common";

export const Movement = (props: { title: string }) => {
    return (
        <MovementLink href={"#"}>{props.title}</MovementLink>
    );
};

const MovementLink = styled.a`
  
`
