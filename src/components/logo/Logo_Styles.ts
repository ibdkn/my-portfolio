import styled from "styled-components";

const LogoWrapper = styled.a`
  position: relative;
  z-index: 999999999;
  display: flex;
  align-items: center;
  gap: 8px;
`

const LogoName = styled.span`
  font-weight: 700;
`

export const S = {
    LogoWrapper,
    LogoName
}