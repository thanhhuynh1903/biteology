import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from 'antd';
import ScrollToTop from './util/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <ConfigProvider theme={{ token: { colorPrimary: "#4CAF50" } }}>
    <App />
    </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)
