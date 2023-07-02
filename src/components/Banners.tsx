import React from 'react';
import styled from "styled-components";
import {ButtonLink} from "./../common/ButtonLink";

export const Banners = () => {
    return (
        <BannersBoxStyled>
            <BannerStyled width='80%'>
                <BannerTitle>
                    <span>1.8 млн </span>товаров в <span>2272</span> магазинах найди, сравни, выберай!
                </BannerTitle>
                <ButtonLink href={'https://www.google.com/'} width={'246px'} title={'Go to categories'}/>
            </BannerStyled>
            <BannerStyled>
                <BannerTitle>
                    <span>Top 10</span> smartphones in 2023
                </BannerTitle>
                <ButtonLink href={'https://www.google.com/'} width={'147px'} title={`Look`}/>
            </BannerStyled>
        </BannersBoxStyled>
    );
};

type BannerStyledPropsType = {
    width?: string
}

const BannersBoxStyled = styled.section`
  display: flex;
  padding: 40px 0 ;
  
  
  div+div{
    margin-left: 32px;
  }

`
const BannerStyled = styled.div<BannerStyledPropsType>`
  width: ${props=>props.width};
  background-color: antiquewhite;
  border-radius: 25px;
  height: 308px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
const BannerTitle = styled.h4`
  font-weight: 800;
  font-size: 48px;
  line-height: 72px;
  color: #0F1113;
  span{
    color:#FF4D4D ;
  }
  margin: 15px;
`


