import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

// projects
const Projects = styled.section`
  padding-bottom: 54px;
  overflow-x: hidden;

  position: relative;
  z-index: 0;

  h2 {
    margin: 0;
  }

  &::before {
    content: "";
    width: 155px;
    height: 155px;
    border: 1px solid ${theme.colors.secondaryColor};

    position: absolute;
    right: -87px;
    bottom: 147px;
    z-index: -1;

    @media ${theme.media.container} {
      right: calc(50% - 770px);
    }

    @media ${theme.media.desktop} {
      display: none;
    }
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`

// project
const Project = styled.div`
  max-width: 332px;
  width: 100%;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid ${theme.colors.secondaryColor};
`

const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`

const InfoWrapper = styled.div`
  padding: 16px;
  border-top: 1px solid ${theme.colors.secondaryColor};
`

const Title = styled.h3`
  ${font({weight: 500, Fmax: 24, Fmin: 20})};
`

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
  margin: 16px 0;
`

export const S = {
    // projects
    Projects,
    ProjectsWrapper,

    // project
    Project,
    Photo,
    InfoWrapper,
    Title,
    Description
}