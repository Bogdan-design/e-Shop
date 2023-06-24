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
import {CardCategories} from "../common/CardCategories";

type CategoriesType = {
    id: number
    title: string
    image:string
    path:string
}

export const BestChoice = () => {

    const categories: CategoriesType[] = [
        {id:1,title:'smartphones',image:smartphones,path:'smartphones'},
        {id:2,title:'laptops',image:laptops,path:'laptops'},
        {id:3,title:'tablets',image:tablets,path:'tablets'},
        {id:4,title:'smart watches',image:smartWatches,path:'smartWatches'},
        {id:5,title:'consoles',image:consoles,path:'consoles'},
        {id:6,title:'headphones',image:headphones,path:'headphones'},
        {id:7,title:'portable columns',image:portableColumns,path:'portableColumns'},
        {id:8,title:'accessories',image:accessories,path:'accessories'},
    ]


    return (
        <SectionStyled>
            <BoxStyled>
                <TitleStyled>Best choice</TitleStyled>
                <a>Go to categories</a>
            </BoxStyled>
            <div>
                <CategoriesBoxStyled>
                    {categories.map(c=> <CardCategories
                        key={c.id}
                        title={c.title}
                        image={c.image}
                        path={c.path}
                    />)}
                </CategoriesBoxStyled>
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

const CategoriesBoxStyled = styled.div`
  display: flex;
  width: 1440px;
  justify-content: space-between;
  align-items: flex-start;
`



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
