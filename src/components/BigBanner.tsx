import React from 'react';
import styled from "styled-components";
import {TitleH1Styled} from "../common/TitleH1.styled";
import GooglePlay from "../asset/imeges/googlePlayLogo.svg"
import TextGooglePlay from "../asset/imeges/path18056.svg"
import AppleLogo from "../asset/imeges/appleLogo.svg"
import AppStore from "../asset/imeges/AppStore.svg"

export const BigBanner = () => {
    return (
        <BannerSection>
            <BannerBox>
                <BannerText>
                    <span>Save</span> your time
                    and get the <span>most</span>
                    from daily shopping
                </BannerText>
                <BoxButtonLink>
                    <ButtonLinkBanner>
                        <img src={GooglePlay}/>
                        <img src={TextGooglePlay}/>
                    </ButtonLinkBanner>
                    <ButtonLinkBanner>
                        <img src={AppleLogo}/>
                        <img src={AppStore}/>
                    </ButtonLinkBanner>
                </BoxButtonLink>
            </BannerBox>
        </BannerSection>
    );
};


const BoxButtonLink= styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`
const BannerSection = styled.section`
  display: flex;
  width: 1440px;
  padding: 80px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: #F6F7FA;
`
const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`

const BannerText = styled(TitleH1Styled)`
  display: flex;
  width: 819px;
  flex-direction: column;
  span{
    color: #FF4D4D;
  }
  
`
const ButtonLinkBanner = styled.a`
  display: flex;
  width: 204.851px;
  height: 61px;
  padding: 10.418px 13.933px 9.141px 14.814px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 12.544px;
  border-radius: 10px;
  background: var(--grayscale-1000, #0F1113);
  color:#FFFFFF ;
`
