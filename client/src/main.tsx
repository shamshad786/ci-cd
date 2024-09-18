import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/*
git remote add origin https://github.com/shamshad786/ci-cd.git
git branch -M main
git push -u origin main
*/ 