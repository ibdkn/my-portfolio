import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SocialLink = styled.a`
  color: ${theme.colors.secondaryColor};

  &:hover {
    color: ${theme.colors.primaryColor};
  }
`