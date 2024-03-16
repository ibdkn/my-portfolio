import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  padding: 32px 0;
  border-top: 1px solid ${theme.colors.secondaryColor};
`

const Info = styled.div`

`

const WebsiteAddress = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
`

const Text = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
`

const Media = styled.div`

`

const MediaTitle = styled.h3`
  ${font({weight: 500, Fmax: 24, Fmin: 18})};
  margin-bottom: 12px;
`

const Copyright = styled.p`
  margin-top: 48px;
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.secondaryColor};
  text-align: center;

  @media ${theme.media.mobile} {
    margin-top: 30px;
  }
`

export const S = {
    Footer,
    Info,
    WebsiteAddress,
    Text,
    Media,
    MediaTitle,
    Copyright
}