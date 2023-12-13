import React from 'react';
import {SectionStyled} from "common/Section.styled";
import styled from "styled-components";
import {TitleH3Styled} from "common/TitleH3.styled";
import {ReviewCard} from "components/Reviews/ReviewCard";

export const Reviews = () => {
    return (
            <ReviewsBox>
                <ContentBox>
                    <BoxStyled>
                        <TitleH3Styled>Reviews</TitleH3Styled>
                        <a>Go to Reviews</a>
                    </BoxStyled>
                    <LineOfProduct>
                        <ReviewCard/>
                        <ReviewCard/>
                        <ReviewCard/>
                        <ReviewCard/>
                    </LineOfProduct>
                </ContentBox>
            </ReviewsBox>
    )
        ;
};

const ReviewsBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
`

const ContentBox =styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
`

const BoxStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    a {
        color: #FF4D4D;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
    }
`
const LineOfProduct = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`