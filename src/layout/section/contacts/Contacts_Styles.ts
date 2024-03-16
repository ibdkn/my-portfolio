import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import dots from "../../../assets/images/bgElements/dots.svg"

const Contacts = styled.section`
  overflow-x: hidden;
  
  position: relative;
  z-index: 0;
  
  &::after {
    content: "";
    width: 103px;
    height: 103px;
    background-image: url(${dots});
    background-size: cover;

    position: absolute;
    left: -51px;
    bottom: 85px;
    z-index: -1;

    @media ${theme.media.container} {
      left: calc(50% - 734px);
    }
  }
  
  ${Container} > ${FlexWrapper} {
    @media ${theme.media.desktop} {
      justify-content: center;
    }
  }

`

const Description = styled.p`
  max-width: 505px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`

const MessageBlock = styled.div`
  max-width: 209px;
  width: 100%;
  padding: 16px;
  border: 1px solid ${theme.colors.secondaryColor};
`

const Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 16px;
`

export const S = {
    Contacts,
    Description,
    MessageBlock,
    Title
}