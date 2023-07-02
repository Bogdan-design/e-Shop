import React, {FC} from 'react';
import buttonFavorite from "../asset/imeges/ButtonLike.svg";
import buttonCompare from "../asset/imeges/ButtonStatistic.svg";
import {TitleH4Styled} from "../common/TitleH4.styled";
import styled from "styled-components";
import iPhone from "../asset/imeges/BestChoiceImeges/Smartphones.png"

type Props = {
    category?: string
    title?: string
}

export const ProductCard: FC<Props> = ({category, title}) => {
    return (
        <CardStyled>
            <HeaderCardStyled>
                <div>
                    <CategoryDescriptionStyled>Portable columns</CategoryDescriptionStyled>
                    <TitleH4Styled>Apple iPhone 13 Pro Max 256 ГБ серый</TitleH4Styled>
                </div>
                <div>
                    <a href="">
                        <img src={buttonFavorite} alt="button-favorite"/>
                    </a>
                    <a href="">
                        <img src={buttonCompare} alt="button-compare"/>
                    </a>
                </div>
            </HeaderCardStyled>
            <BodyCardStyled>
                <img src={iPhone} alt="iPhone"/>
                <div>
                    <CategoryDescriptionStyled>Design</CategoryDescriptionStyled>
                    <CategoryDescriptionStyled>Portability</CategoryDescriptionStyled>
                    <CategoryDescriptionStyled>Camera</CategoryDescriptionStyled>
                    <CategoryDescriptionStyled>Responsiveness</CategoryDescriptionStyled>
                    <CategoryDescriptionStyled>Display</CategoryDescriptionStyled>
                    <CategoryDescriptionStyled>Battery</CategoryDescriptionStyled>
                </div>
            </BodyCardStyled>
        </CardStyled>
    );
};

const CardStyled = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 45%;
  border-radius: 12px;
  border: 1px solid var(--grayscale-200, #F2F5F9);
  background: var(--grayscale-0, #FDFDFD);

`

const CategoryDescriptionStyled = styled.p`
  color: var(--grayscale-600, #7E8794);
  font-size: 14px;
  line-height: 18px;
  margin: 0;
`
const HeaderCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  a+a{
    margin-left: 20px;
  }
`
const BodyCardStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;  
`
