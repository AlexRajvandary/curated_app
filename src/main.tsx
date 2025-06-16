//Main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import RouterWrapper from './RouterWrapper.jsx';

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
   <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  </StrictMode>,
)

