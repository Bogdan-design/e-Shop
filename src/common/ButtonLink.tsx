import React, {FC} from 'react';
import styled from "styled-components";
import arrowIcon from "./asset/imeges/Stroke 1.svg";


type Props={
    href?: string
    title: string
    width?:string

}




export const ButtonLink: FC<Props> = ({href,title,width}) => {

    return (
        <ButtonLinkStyled width={width} href={href} >
            {title}
        </ButtonLinkStyled>
    );
};


type StyledType = {
    width?:string
}


const ButtonLinkStyled = styled.a<StyledType>`
  display: flex;
  align-items: center;
  height: 52px;
  width: ${props=>props.width};
  border-radius: 8px;
  color: #FFFFFF;
  text-decoration: none;
  background-color: #FF4D4D;
  margin: 0 15px 0 15px;
  &:hover{
    cursor: pointer;
  }
`