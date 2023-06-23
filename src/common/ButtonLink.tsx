import React, {FC} from 'react';
import styled from "styled-components";

type Props={
    href?: string
    title: string
}


export const ButtonLink: FC<Props> = ({href,title}) => {

    return (
        <ButtonLinkStyled href={href} >
            {title}
        </ButtonLinkStyled>
    );
};

const ButtonLinkStyled = styled.a`
  border-radius: 8px;
  color: #FFFFFF;
  text-decoration: none;
  background-color: #FF4D4D;
  &:hover{
    cursor: pointer;
  }
`