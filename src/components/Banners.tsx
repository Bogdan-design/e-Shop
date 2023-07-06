import React from 'react';
import styled from "styled-components";
import {ButtonLink} from "common/ButtonLink";

export const Banners = () => {
    return (
        <BannersBox>
            <BannersBoxStyled>
                <BannerStyled>
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
        </BannersBox>
    );
};

const BannersBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  
`


const BannersBoxStyled = styled.section`
  display: flex;
  width: 1440px;
  align-items: flex-start;
  gap: 32px;
`
const BannerStyled = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 16px;
  background:#F2F5F9;
  
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


