import React from 'react';
import {TitleH3Styled} from "common/TitleH3.styled";
import styled from "styled-components";
import {SectionStyled} from "common/Section.styled";
import {NewPositionCard} from "../New/NewPositionCard";

export const New = () => {

    const cards = Array.from({ length: 12 }, (_, i) => <NewPositionCard key={i} />)
    return (
        <NewBox>
            <SectionStyled>
                <BoxStyled>
                    <TitleH3Styled>Best choice</TitleH3Styled>
                    <a>Go to categories</a>
                </BoxStyled>
                <LineOfProduct>
                    {cards.map(n => n)}
                </LineOfProduct>
            </SectionStyled>
        </NewBox>
    );
};

const NewBox = styled.div`
  display: flex;
  justify-content: center;
`

const LineOfProduct=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
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
