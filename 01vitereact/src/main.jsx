import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
// Ek funtion lo from app.jsx usse retrun karo koi HTML
// aur phir mujhe (main.jsx) ko do mai usse render karwa dunga
