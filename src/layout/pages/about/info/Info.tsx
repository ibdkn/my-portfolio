import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Description} from "../../../../components/about/description/Description";
import {Photo} from "../../../../components/about/photo/Photo";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const Info = () => {
    return (
        <StyledInfo>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <FlexWrapper direction={"column"}>
                    <Description/>
                </FlexWrapper>
                <Photo/>
            </FlexWrapper>
        </StyledInfo>
    );
};

const StyledInfo = styled.div`
  //padding: 35px 0;

  > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column-reverse;
      justify-content: center;
      gap: 20px;
    }
  }
  
  
`
