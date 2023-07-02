import React, {useState} from 'react';
import {TitleH3Styled} from "../common/TitleH3.styled";
import styled from "styled-components";
import {CardCategories} from "../common/CardCategories";
import {ProductCard} from "../components/ProductCard";
import {SectionStyled} from "../common/Section.styled";
import smartphones from "../asset/imeges/BestChoiceImeges/Smartphones.png";
import laptops from "../asset/imeges/BestChoiceImeges/Laptops.png";
import tablets from "../asset/imeges/BestChoiceImeges/Tablets.png";
import smartWatches from "../asset/imeges/BestChoiceImeges/SmartWatches.png";
import consoles from "..asset/imeges/BestChoiceImeges/Consoles.png";
import headphones from "../asset/imeges/BestChoiceImeges/Headphones.png";
import portableColumns from "../asset/imeges/BestChoiceImeges/PortableColumns.png";
import accessories from "../asset/imeges/BestChoiceImeges/Accessories.png";



type filterOptionstype = {
    name: string
    status: boolean
}

export const BestChoice = () => {
  const  bestChoiceCategories = [
        {id: 1, title: 'smartphones', image: smartphones, path: 'smartphones'},
        {id: 2, title: 'laptops', image: laptops, path: 'laptops'},
        {id: 3, title: 'tablets', image: tablets, path: 'tablets'},
        {id: 4, title: 'smart watches', image: smartWatches, path: 'smartWatches'},
        {id: 5, title: 'consoles', image: consoles, path: 'consoles'},
        {id: 6, title: 'headphones', image: headphones, path: 'headphones'},
        {id: 7, title: 'portable columns', image: portableColumns, path: 'portableColumns'},
        {id: 8, title: 'accessories', image: accessories, path: 'accessories'},
    ]


    const [filterOptions, setFilterOptions] = useState<filterOptionstype[]>([
        {name: 'Design', status: false},
        {name: 'Portability', status: false},
        {name: 'Camera', status: false},
        {name: 'Responsiveness', status: false},
        {name: 'Display', status: false},
        {name: 'Battery', status: false},
    ])


    return (
        <TransformBgc>
            <SectionStyled>
                <BoxStyled>
                    <TitleH3Styled>Best choice</TitleH3Styled>
                    <a>Go to categories</a>
                </BoxStyled>
                <CategoriesBoxStyled>
                    {bestChoiceCategories.map(c => <CardCategories
                        key={c.id}
                        title={c.title}
                        image={c.image}
                        path={c.path}
                    />)}
                </CategoriesBoxStyled>
                <CardsFiledStyled>
                    <ButtonStyled></ButtonStyled>
                    <ProductCardBoxStyled>
                        <FiltersBoxStyled>
                            {filterOptions.map(f => <FilterButtonStyled>
                                {f.name}
                                <CancelButtonStyled></CancelButtonStyled>
                            </FilterButtonStyled>)}
                        </FiltersBoxStyled>
                        <TableBoxStyled>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </TableBoxStyled>
                    </ProductCardBoxStyled>
                    <ButtonStyled></ButtonStyled>
                </CardsFiledStyled>
            </SectionStyled>
        </TransformBgc>
    );
};


const TransformBgc = styled.div`
  background-color: #F2F5F9;
  height: 1167px;
  display: flex;
  align-items: center;
  clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%);
  margin: 50px auto;

`

const ButtonStyled = styled.button`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 1111px;
  cursor: pointer;
  border: 1px solid #F2F5F9;
  background: #FDFDFD;
`

const TableBoxStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

`

const ProductCardBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
`

const CardsFiledStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`
const CategoriesBoxStyled = styled.div`
  display: flex;
  width: 1440px;
  justify-content: space-between;
  align-items: flex-start;

`

const FiltersBoxStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
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

const FilterButtonStyled = styled.button`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--grayscale-200, #F2F5F9);
  background: var(--grayscale-0, #FDFDFD);
  cursor: pointer;
  color: var(--grayscale-600, #7E8794);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`
const CancelButtonStyled = styled.button`
  width: 20px;
  height: 20px;
  stroke: red;
  cursor: pointer;
  border: none;
  background-image: url("../asset/imeges/add.svg");
  background-size: contain;
`
