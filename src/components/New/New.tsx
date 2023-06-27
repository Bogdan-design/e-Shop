import React from 'react';
import {TitleH3Styled} from "../../common/TitleH3.styled";
import styled from "styled-components";
import {SectionStyled} from "../../common/Section.styled";
import {NewPositionCard} from "../New/NewPositionCard";

export const New = () => {
    return (
        <SectionStyled>
                <BoxStyled>
                    <TitleH3Styled>Best choice</TitleH3Styled>
                    <a>Go to categories</a>
                </BoxStyled>
            <LineOfProduct>
                <NewPositionCard/>
                <NewPositionCard/>
                <NewPositionCard/>
                <NewPositionCard/>
                <NewPositionCard/>
                <NewPositionCard/>
                <NewPositionCard/>
                <NewPositionCard/>
                <NewPositionCard/>
                <NewPositionCard/>
            </LineOfProduct>
        </SectionStyled>
    );
};

const LineOfProduct=styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`

const BoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  a {
    color: var(--main-primary, #FF4D4D);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`
