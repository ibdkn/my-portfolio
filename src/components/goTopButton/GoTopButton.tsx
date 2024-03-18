import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const GoTopButton = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopButton onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrowToTop"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                </StyledGoTopButton>
            )}

        </>
    );
};

const StyledGoTopButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media ${theme.media.tablet} {
    right: 10px;
    bottom: 10px;
  }
`