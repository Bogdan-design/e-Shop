import React from 'react';
import styled from "styled-components";
import logo from "../asset/imeges/logo.svg"
import search from "../asset/imeges/Search.svg"
import buttonFavorite from "../asset/imeges/ButtonLike.svg"
import buttonCompare from "../asset/imeges/ButtonStatistic.svg"
import userIcon from "../asset/imeges/ButtonUser.svg"



export const Header = () => {
    return (
        <HeaderStyled>
            <LogoBox>
                <img src={logo} alt={'logo'}/>
                <p>The best prices in online stores</p>
            </LogoBox>
            <SearchBox>
                <SelectBoxStyled name="Catalog" id="">
                    <OptionsStyled>Catalog</OptionsStyled>
                    <OptionsStyled>Catalog</OptionsStyled>

                    <OptionsStyled>Catalog</OptionsStyled>
                </SelectBoxStyled>
                <label id={'search'}>
                    <InputStyled id={'search'} type="text" placeholder={`${search}'search'`}/>
                </label>
            </SearchBox>
            <div>
                <a href="">
                    <img src={buttonFavorite} alt="button-favorite"/>
                </a>
                <a href="">
                    <img src={buttonCompare} alt="button-compare"/>
                </a>
                <a href="">
                    <img src={userIcon} alt="button-profile"/>
                </a>
            </div>
        </HeaderStyled>
    );
};

const OptionsStyled = styled.option`
display: flex;
  justify-content: center;
  
`

const SearchBox =styled.div`
    display: inline-block;
  
`

const HeaderStyled = styled.header`
  display: flex;
  border-bottom:2px solid #F2F5F9;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  a+a{
    margin-left: 20px;
  }
`

const LogoBox = styled.div`
  display: flex;
  max-width: 350px;
  p {
   margin: 0 0 0 10px;
  }
  
`

const SelectBoxStyled = styled.select`
  
  color: #FFFFFF;
  width: 200px;
  height: 52px;
  border: none;
  border-radius: 8px 0 0 8px;
  background-color: #FF4D4D;
  
`

const InputStyled = styled.input`
  border: none;
  border-radius: 0 8px 8px 0;
  background-color: #F2F5F9;
 height: 52px;
  width: 640px;

`

