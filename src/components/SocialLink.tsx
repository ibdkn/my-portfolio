import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SocialLink = styled.a`
  color: #ABB2BF;

  &:hover {
    color: ${theme.colors.primaryColor};
  }
`