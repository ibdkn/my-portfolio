
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import elementsBg from "../../../assets/images/skills/elements.svg"
import {Container} from "../../../components/Container";

// skills
const Skills = styled.section`
  padding: 54px 0;

  ${Container} {
    background-image: url(${elementsBg});
    background-repeat: no-repeat;
    background-size: 349px, contain;
    background-position: top 54px left 32px;

    @media ${theme.media.tablet} {
      background-image: none;
    }

    >${FlexWrapper} {
      @media ${theme.media.desktop} {

        justify-content: center;
      }
    }
  }
`

const SkillsWrapper = styled.div`
  max-width: 608px;
  margin-left: auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  height: 300px;

  @media ${theme.media.tablet} {
    max-width: 100%;
    height: auto;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    margin: 0;
  }
`

// skill
const Skill = styled.div`
  max-width: 198px;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid ${theme.colors.secondaryColor};

  @media ${theme.media.tablet} {
  margin-bottom: 0;
  }
`

const Title = styled.h3`
  padding: 8px;
  border-bottom: 1px solid ${theme.colors.secondaryColor};
`

export const S = {
    // skills
    Skills,
    SkillsWrapper,

    // skill
    Skill,
    Title
}