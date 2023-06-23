import React from 'react';
import styled from "styled-components";
import {ButtonLink} from "./../common/ButtonLink";

export const Banners = () => {
    return (
        <BannersBoxStyled>
            <BannerStyled>
                <h4>
                    <span>1.8 млн </span>товаров в <span>2272</span> магазинах найди, сравни, выберай!
                </h4>
                <a href={''} >
                    Go to categories
                </a>
                <ButtonLink href={'https://www.google.com/'} title={'Go to categories'}/>
            </BannerStyled>
            <BannerStyled>
                <h4>
                    <span>Top 10</span> smartphones in 2023
                </h4>
                <a href={''}>
                    Look
                </a>
            </BannerStyled>
        </BannersBoxStyled>
    );
};

const BannersBoxStyled = styled.section`
 display: flex;
  
`
const BannerStyled= styled.div`
  height: 308px;
display: flex;
  flex-direction: column;
`


