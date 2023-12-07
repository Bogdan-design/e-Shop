import React from 'react';
import {TitleH3Styled} from "common/TitleH3.styled";
import {TitleH2Styled} from "common/TitleH2.styled";
import styled from "styled-components";

export const Goals = () => {
    return (
        <SectionStyled>
            <GoalsBox>
                <Title>Our goal is to create a fantastic
                    <p>service for all consumers</p></Title>
                <Container>
                    <Box>
                        <Number>5</Number>
                        <TextStyled>Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc. </TextStyled>
                    </Box>
                    <Box>
                        <Number>30</Number>
                        <TextStyled>Gravida vel convallis id aliquet volutpat nullam dignissim. Amet parturient elementum lectus rhoncus at.</TextStyled>
                    </Box>
                    <Box>
                        <Number>300</Number>
                        <TextStyled>Sed varius ut venenatis id amet et consectetur pellentesque. Vitae urna ornare vel suspendisse tincidunt. </TextStyled>
                    </Box>
                    <Box>
                        <Number>8</Number>
                        <TextStyled>Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing feugiat quis convallis velit. </TextStyled>
                    </Box>
                </Container>
            </GoalsBox>
        </SectionStyled>
    );
};

const Title = styled(TitleH3Styled)`
margin: 0;
  p{
    margin: 0;
  }
`

const SectionStyled = styled.section`
display: flex;
  justify-content: center;
`

const GoalsBox = styled.div`
    display: flex;
  flex-direction: column;
  width: 1440px;
  gap: 20px;
  
`

const Container = styled.div`
  display: flex;  
  gap: 32px;

`
const Number = styled(TitleH2Styled)`
  display: flex;
  width: 255px;
  flex-direction: column;
  color: red;
  font-size: 48px;
  font-weight: 800;
  line-height: 64px;  
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`

const TextStyled = styled.p`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--grayscale-1000, #0F1113);
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`