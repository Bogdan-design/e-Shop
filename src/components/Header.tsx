import React from 'react';
import styled from "styled-components";
import logo from "../asset/imeges/logo.svg"
import search from "asset/imeges/search.svg"
import buttonFavorite from "asset/imeges/buttonLike.svg"
import buttonCompare from "asset/imeges/buttonStatistic.svg"
import userIcon from "asset/imeges/buttonUser.svg"
import arrowDown3 from "asset/imeges/arrow-down3.svg"


export const Header = () => {
    return (
        <div>
            <HeaderStyled>
                <LogoBox>
                    <img src={logo} alt={'logo'}/>
                    <p>The best prices in online stores</p>
                </LogoBox>
                <SearchBox>
                    <InputOptionsBox>
                        <SelectBox>
                            <Select name="Catalog" id="">
                                <OptionsStyled>Catalog</OptionsStyled>
                                <OptionsStyled>Catalog</OptionsStyled>
                                <OptionsStyled>Catalog</OptionsStyled>
                            </Select>
                            <img src={arrowDown3}/>
                        </SelectBox>
                        <InputBox>
                            <img src={search}/>
                            <label id={'search'}>
                                <InputStyled id={'search'} type="text" placeholder='search'/>
                            </label>
                        </InputBox>
                    </InputOptionsBox>
                    <a href="">
                        <img src={buttonFavorite} alt="button-favorite"/>
                    </a>
                    <a href="">
                        <img src={buttonCompare} alt="button-compare"/>
                    </a>
                    <a href="">
                        <img src={userIcon} alt="button-profile"/>
                    </a>
                </SearchBox>
            </HeaderStyled>
        </div>
    );
};

const SelectBox = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #FF4D4D;
`

const InputOptionsBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
`

const InputBox = styled.div`
  display: flex;
  width: 641px;
  padding: 14px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 0 8px 8px 0;
  background: #F2F5F9;
`

const OptionsStyled = styled.option`
  display: flex;
  justify-content: center;

`

const SearchBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

`

const HeaderStyled = styled.header`
  display: flex;
  width: 1920px;
  padding: 8px 240px;
  align-items: center;
  gap: 32px;
  border-bottom: 1px solid #F2F5F9;
  background: #FDFDFD;
`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

`

const Select = styled.select`
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

`

const InputStyled = styled.input`
  border: none;
  color: #A1ABB9;
  background-color: #F2F5F9;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    border: none;
  }
`

