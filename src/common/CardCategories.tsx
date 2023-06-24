import React, {FC} from 'react';
import styled from "styled-components";

type Props = {
    title: string
    image: string

}

export const CardCategories: FC<Props> = ({title, image}) => {

    function capitalizeFirstLetter(title: string) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }


    return (
        <a>
            <img src={image}/>
            <CardTitleStyled>{capitalizeFirstLetter(title)}</CardTitleStyled>
        </a>
    );
};

const CardTitleStyled = styled.h4`
  color: var(--grayscale-1000, #0F1113);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`

