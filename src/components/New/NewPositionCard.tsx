import React from 'react';
import styled from "styled-components";
import arrowDown from "../../asset/imeges/Arrow - Down 4.svg"
import productImg from "../../asset/imeges/new.product/SmartWatch.png"
import buttonFavorite from "../../asset/imeges/ButtonLike.svg"
import buttonCompare from "../../asset/imeges/ButtonStatistic.svg"

export const NewPositionCard = () => {
    return (
        <CardBox>
            <ImgProduct src={productImg}/>
            <DescriptionBox>
                <TitleBox>
                    <CategoryTitle>Smart Watch</CategoryTitle>
                    <ProductTitle>Apple iPhone 13 Pro Max 256 ГБ серый</ProductTitle>
                </TitleBox>
                <PriceBox>
                    <div>
                        <PriceTitle>Price</PriceTitle>
                        <ArrowImgStyled src={arrowDown}/>
                        <span>13%</span>
                    </div>
                    <Price>
                        2000 $
                    </Price>
                    <ImgBox>
                        <IconButton>
                            <img src={buttonFavorite}/>
                        </IconButton>
                        <IconButton>

                            <img src={buttonCompare}/>
                        </IconButton>
                    </ImgBox>
                </PriceBox>


            </DescriptionBox>

        </CardBox>
    );
};

const IconButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    border-radius: 50%;
    border: 1px solid var(--grayscale-200, #F2F5F9);
    background:#FDFDFD;
  }
  
`

const ImgBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  position: absolute;
  right: 20px;
  bottom: 20px;
`

const Price = styled.h4`
  display: flex;
  width: 283px;
  flex-direction: column;
  color: #263141;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
`

const ArrowImgStyled = styled.img`
  width: 20px;
  height: 20px;
  background-position: center;
  background-size: cover;
`

const PriceTitle = styled.h5`
  display: inline-block;
  color: #7E8794;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
`

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  span {
    color: #30D170;
    font-size: 16px;
    line-height: 20px;
  }
`

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`
const ProductTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--grayscale-800, #263141);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin: 0
`

const CardBox = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 230px;
  border-radius: 12px;
  border: 1px solid var(--grayscale-200, #F2F5F9);
  background: var(--grayscale-100, #F6F7FA);
  position: relative;
`

const ImgProduct = styled.img`
  width: 232px;
  height: 156px;
  background-position: center;
  background-size: contain;

`
const CategoryTitle = styled.h5`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--grayscale-600, #7E8794);
  font-size: 14px;
  line-height: 18px;
  margin: 0;
`