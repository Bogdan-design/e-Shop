import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";
import {theme} from "styles/Theme.styled";
import {GlobalStyles} from "styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

type ThemeWithIterator = typeof theme & {[key:string]: IterableIterator<string[]> };

root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme as ThemeWithIterator}>
            <App/>
            <GlobalStyles />
        </ThemeProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
