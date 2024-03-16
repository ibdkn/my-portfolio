import React from 'react';
import {Container} from "../../components/Container";
import styled from "styled-components";
import {CompleteApps} from "./completeApps/CompleteApps";
import {SmallProjects} from "./smallProjects/SmallProjects";
import {PageInfo} from "../../components/PageInfo";

export const ProjectsPage = () => {
    return (
        <StyledProjects>
            <Container>
                <PageInfo title={"projects"} description={"List of my projects"} />
                <CompleteApps />
                <SmallProjects/>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.div`
  padding: 80px 0 145px 0;
  overflow-x: hidden;
  
  section {
    padding: 35px 0;
  }
`
