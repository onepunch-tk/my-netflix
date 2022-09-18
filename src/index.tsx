import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import {ThemeProvider} from "styled-components";
import { GlobalStyled } from './styles/globalStyled';
import {theme} from "./styles/theme";
import App from './App';
import {QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient();
root.render(
    <QueryClientProvider client={client}>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyled/>
                <App />
            </ThemeProvider>
        </RecoilRoot>
    </QueryClientProvider>
);
