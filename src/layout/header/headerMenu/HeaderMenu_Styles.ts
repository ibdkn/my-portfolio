import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

// menu
const ListItem = styled.li`
  position: relative;

  &::before {
    content: "#";
    color: ${theme.colors.accent};
  }
`

const NavLink = styled(Link)`
  color: ${theme.colors.secondaryColor};
  cursor: pointer;
  
  &:hover, &.active {
    color: ${theme.colors.primaryColor};
  }
`

// mobile menu
const MobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 20px;
  right: 16px;
  width: 24px;
  height: 24px;
  z-index: 9999999;
  
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.primaryColor};

    position: absolute;
    right: 0;
    top: 9px;
    transition: .2s ease-in-out;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(-45deg);
      transition: .2s ease-in-out;
    `}
    
    &::before {
      content: "";
      width: 15px;
      height: 2px;
      background-color: ${theme.colors.primaryColor};
      position: absolute;
      right: 0;
      transform: translateY(7px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 24px;
        transform: rotate(90deg) translateY(0);
        transition: .2s ease-in-out;
      `}
    }

  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: rgba(25, 25, 25, 0.95);
  z-index: 99999;
  transform: translateX(-100%);
  transition: .5s ease-in-out;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    gap: 0;
    transform: translateX(0);
    transition: .5s ease-in-out;
  `}
  
  ul {
    padding-top: 95px;
    padding-left: 15px;
    font-size: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

// desktop menu
const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  ul {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`

export const S = {
    // menu
    ListItem,
    NavLink,

    // mobile menu
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    Social,

    // desktop menu
    DesktopMenu
}