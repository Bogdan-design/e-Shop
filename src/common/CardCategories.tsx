import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {TitleH4Styled} from "../common/TitleH4.styled";

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
                <TitleH4Styled>{capitalizeFirstLetter(title)}</TitleH4Styled>
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

