import React from 'react';
import {Header} from "../components/Header";
import {Banners} from "../components/Banners";
import styled from "styled-components";
import {BestChoice} from "../components/BestChoice";
import {Goals} from "../components/Goals";
import {BigBanner} from "../components/BigBanner";
import {New} from "../components/New/New";
import {Reviews} from "../components/Reviews/Reviews";
import {Footer} from "../components/Footer";


function App() {
    return (
        <AppStyled >
            <BoxStyled>
                <Header/>
                <Banners/>
                <BestChoice/>
                <Goals/>
                <BigBanner/>
                <New/>
                <Reviews/>
                <Footer/>
            </BoxStyled>
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
    
`

const BoxStyled= styled.div`
    width: 1440px;
  
`