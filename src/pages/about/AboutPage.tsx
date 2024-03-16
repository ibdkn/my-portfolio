import React from 'react';
import {Container} from "../../components/Container";
import {PageInfo} from "../../components/PageInfo";
import styled from "styled-components";
import { MoreAbout } from './about/MoreAbout';
import {Facts} from "./facts/Facts";
import {Skills} from "../../layout/section/skills/Skills";
import {About} from "../../layout/section/about/About";


export  const AboutPage = () => {
    return (
        <StyledAbout>
            <Container>
                <PageInfo title={"about-me"} description={"Who am i?"} />
                <About/>
                {/*<MoreAbout/>*/}
                <Skills/>
                <Facts/>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
  padding: 80px 0 145px 0;
  overflow-x: hidden;
  
  position: relative;

  section {
    padding: 35px 0;
  }
`
