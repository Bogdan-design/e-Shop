import React from 'react';
import {TitleStyled} from "../common/Title.styled";
import {ButtonLink} from "../common/ButtonLink";
import styled from "styled-components";
import smartphones from "../asset/imeges/BestChoiceImeges/Smartphones.png"
import laptops from "../asset/imeges/BestChoiceImeges/Laptops.png"
import tablets from "../asset/imeges/BestChoiceImeges/Tablets.png"
import smartWatches from "../asset/imeges/BestChoiceImeges/SmartWatches.png"
import consoles from "../asset/imeges/BestChoiceImeges/Consoles.png"
import headphones from "../asset/imeges/BestChoiceImeges/Headphones.png"
import portableColumns from "../asset/imeges/BestChoiceImeges/PortableColumns.png"
import accessories from "../asset/imeges/BestChoiceImeges/Accessories.png"

type CategoriesType = {
    id: number
    title: string
    image:string
}

export const BestChoice = () => {

    const categories: CategoriesType[] = [
        {id:1,title:'smartphones',image:smartphones},
        {id:2,title:'laptops',image:laptops},
        {id:3,title:'tablets',image:tablets},
        {id:4,title:'smartWatches',image:smartWatches},
        {id:5,title:'consoles',image:consoles},
        {id:6,title:'headphones',image:headphones},
        {id:7,title:'portableColumns',image:portableColumns},
        {id:8,title:'accessories',image:accessories},
    ]


    return (
        <SectionStyled>
            <BoxStyled>
                <TitleStyled>Best choice</TitleStyled>
                <a>Go to categories</a>
            </BoxStyled>
            <div>
                <div>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <button></button>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <button></button>
                </div>
            </div>

        </SectionStyled>
    );
};



const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

const BoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  a{
    color: var(--main-primary, #FF4D4D);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`

const CardOfChoicesStyled = styled.a`
  
`