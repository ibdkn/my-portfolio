import React from 'react';
import {Container} from "../../components/Container";
import {PageInfo} from "../../components/pages/PageInfo";
import styled from "styled-components";
import {Facts} from "./facts/Facts";
import {Info} from "./info/Info";
import {Skills} from "./skill/Skills";

export  const AboutPage = () => {
    return (
        <StyledAbout>
            <Container>
                <PageInfo title={"about-me"} description={"Who am i?"} />
                <Info/>
                <Skills/>
                <Facts/>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  padding: 80px 0 145px 0;
  overflow-x: hidden;
  
  position: relative;

  section {
    padding: 35px 0;
  }
  
  ${Container} {
    > div {
      padding: 35px 0;
    }
  }
`
