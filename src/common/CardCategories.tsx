import React, {FC} from 'react';
import styled from "styled-components";
import {Navigate, NavLink} from "react-router-dom";

type Props = {
    title: string
    image: string
    path: string

}

export const CardCategories: FC<Props> = ({title, image,path}) => {

    function capitalizeFirstLetter(title: string) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }


    return (
        <BoxCardStyled>
            <NavLink style={{textDecoration:'none'}} to={path}>
                <img src={image}/>
                <TitleCardStyled>{capitalizeFirstLetter(title)}</TitleCardStyled>
            </NavLink>
        </BoxCardStyled>
    );
};


const BoxCardStyled = styled.a`
  height: 200px;
  width: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
`

const TitleCardStyled = styled.h4`
  color: var(--grayscale-1000, #0F1113);
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`

