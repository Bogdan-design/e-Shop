import React from 'react';
import {Header} from "./components/Header";
import {Banners} from "./components/Banners";
import styled from "styled-components";
import {BestChoice} from "./components/BestChoice";


function App() {
    return (
        <AppStyled >
            <BoxStyled>
                <Header/>
                <Banners/>
                <BestChoice/>
                <section className='goal'>
                    <h3>Our goal is to create a fantastic
                        service for all consumers</h3>
                    <ul>
                        <li>
                            <h4></h4>
                            <p></p>
                        </li>
                        <li>
                            <h4></h4>
                            <p></p>
                        </li>
                        <li>
                            <h4></h4>
                            <p></p>
                        </li>
                        <li>
                            <h4></h4>
                            <p></p>
                        </li>
                    </ul>
                </section>
                <section>
                    <div>
                        <h3>Save your time
                            and get the most
                            from daily shopping</h3>
                        <a>
                            <img src="" alt=""/>
                        </a>
                        <a></a>
                    </div>
                    <img src={''}/>
                    <img src={''}/>
                </section>
                <section>
                    <div>
                        <h4>New</h4>
                        <button>
                            to news
                            <img/>
                        </button>
                    </div>
                    <div className='product'>
                        <img src="" alt=""/>
                        <p>Smartphones</p>
                        <h4>Apple iPhone 13 Pro Max 256 Gb silver</h4>
                        <div>
                            <div>
                                <p>Price</p>
                                <div>%13</div>
                                <div>1200 $</div>
                            </div>
                            <a>
                                <img src="" alt="favorite"/>
                            </a>
                            <a>
                                <img src="" alt="compare"/>
                            </a>
                        </div>
                        <button>
                            Show
                            <img/>
                        </button>
                    </div>
                </section>
                <section className='reviews'>
                    <div>
                        <h4>Reviews</h4>
                        <button>
                            To reviews
                            <img/>
                        </button>
                    </div>
                    <div className='cardReview'>
                        <img src="" alt=""/>
                        <h4>Review of outdated smartphones</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, placeat.</p>
                        <button>
                            Show
                            <img/>
                        </button>
                    </div>

                </section>
                <footer>
                    <div>
                        <div>
                            <img/>
                            <p>Social networks</p>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </div>
                        <div>
                            <p>For user</p>
                            <a href="">Connect with us</a>
                            <a href="">User support</a>
                            <a href="">FAQ & Guides</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of use</a>
                        </div>
                        <div>
                            <p>Popular categories</p>
                            <a href="">Smartphones</a>
                            <a href="">Electric Kettles</a>
                            <a href="">Washing machines</a>
                            <a href="">TV</a>
                            <a href="">laptops</a>
                        </div>
                        <div>
                            <p>Team Behoof</p>
                            <a href="">About Us</a>
                            <a href="">Work with us</a>
                        </div>
                    </div>
                    <p>Copyright © 2023 Behoof, Inc. All rights reserved</p>
                </footer>
            </BoxStyled>

        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
  width: 1920px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`

const BoxStyled= styled.div`
    width: 1440px;
  
`