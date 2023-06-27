import React from 'react';
import styled from "styled-components";
import Review1 from "../../asset/imeges/ReveiwsImg/Frame 2371.png"
import ArrowRight from "../../asset/imeges/Arrow - Right 2.png"


export const ReviewCard = () => {
    return (
        <CardBox>
            <ImgProduct src={Review1}/>
            <DescriptionBox>
                <TitleBox>Review of outdated smartphones</TitleBox>
                <p>Lorem ipsum dolor sit amet consectetur. Rhoncus risus viverra enim nunc. </p>
                <ShowBox>
                    <a href="">Show</a>
                    <img src={ArrowRight} alt=""/>
                </ShowBox>
            </DescriptionBox>
        </CardBox>
    );
};

const ShowBox = styled.a`
  display: flex;
  padding: 4px 0px;
  align-items: center;
  flex-direction: row;
  margin: 0;
  cursor: pointer;
  gap: 4px;
`

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  color: #263141;
`

const DescriptionBox = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background-color: #F6F7FA;

  a {
    color: var(--main-primary, #FF4D4D);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-decoration: none;
  }
`

const CardBox = styled.div`

`

const ImgProduct = styled.img`
  border-radius: 10px 10px 0 0;
  height: 320px;
  align-self: stretch;
  //background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`
