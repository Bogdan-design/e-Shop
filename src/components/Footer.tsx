import React from 'react';
import styled from "styled-components";
import logo from "../asset/imeges/logo.svg"
import VK from  "../asset/imeges/socialMedia/VK.svg"
import TikTok from  "../asset/imeges/socialMedia/TT.svg"
import Inst from  "../asset/imeges/socialMedia/Inst.svg"
import Telegram from  "../asset/imeges/socialMedia/TG.svg"
import YouTub from  "../asset/imeges/socialMedia/YouTube.svg"

export const Footer = () => {
    return (
        <FooterBox>
            <LinksBox>
                <LogoBox>
                    <Logo>
                        <img src={logo}/>
                    </Logo>
                    <FooterTitles>Social networks</FooterTitles>
                    <SocialNetworkBox>
                        <a href="">
                            <img src={VK}/>
                        </a>
                        <a href="">
                            <img src={TikTok}/>
                        </a>
                        <a href="">
                            <img src={Inst}/>
                        </a>
                        <a href="">
                            <img src={Telegram}/>
                        </a>
                        <a href="">
                            <img src={YouTub}/>
                        </a>
                    </SocialNetworkBox>
                </LogoBox>
                <LogoBox>
                    <FooterTitles>For user</FooterTitles>
                    <FooterLink href="">Connect with us</FooterLink>
                    <FooterLink href="">User support</FooterLink>
                    <FooterLink href="">FAQ & Guides</FooterLink>
                    <FooterLink href="">Privacy Policy</FooterLink>
                    <FooterLink href="">Terms of use</FooterLink>
                </LogoBox>
                <LogoBox>
                    <FooterTitles>Popular categories</FooterTitles>
                    <FooterLink href="">Smartphones</FooterLink>
                    <FooterLink href="">Electric Kettles</FooterLink>
                    <FooterLink href="">Washing machines</FooterLink>
                    <FooterLink href="">TV</FooterLink>
                    <FooterLink href="">laptops</FooterLink>
                </LogoBox>
                <LogoBox>
                    <FooterTitles>Team Behoof</FooterTitles>
                    <FooterLink href="">About Us</FooterLink>
                    <FooterLink href="">Work with us</FooterLink>
                </LogoBox>
            </LinksBox>
            <FooterTitles>Copyright © 2023 Behoof, Inc. All rights reserved</FooterTitles>
        </FooterBox>
    );
};

const LinksBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  &::after {}
  padding: 20px;
  
  width: 60vw;
  border-bottom: 1px solid #A1ABB9;
`


const FooterLink = styled.a`
  color: var(--grayscale-800, #263141);
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
`

const SocialNetworkBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  img {
    width: 24px;
    height: 24px;
    
  }
`

const FooterTitles=styled.h5`
  display: flex;
  justify-content: flex-start;
  color: var(--grayscale-500, #A1ABB9);
  font-size: 16px;
  line-height: 24px;
  
  margin: 0;
`

const Logo = styled.div`
  display: flex;
  width: 186px;
  height: 60px;
  padding: 9px 0;
  justify-content: center;
  align-items: center;
`

const LogoBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

const FooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 80px;
  height: 349px;
  flex-shrink: 0;
  background: var(--grayscale-200, #F2F5F9);
`