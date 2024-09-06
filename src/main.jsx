import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BoardingPage from './components/BoardingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BoardingPage/>
  </StrictMode>,
)
