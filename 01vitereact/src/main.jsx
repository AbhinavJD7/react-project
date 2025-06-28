import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'> Visit Google</a>
)

const anotheuser = "chai aur react"

const reactElement  = React.createElement(
    'a',
    {href: 'https://google.com' , target: '_blank'}, 
    'Click me to visit Google',
    anotherElement
)

createRoot(document.getElementById('root')).render(
    //MyApp()
    reactElement
    //<App/>
    
)
// Ek funtion lo from app.jsx usse retrun karo koi HTML
// aur phir mujhe (main.jsx) ko do mai usse render karwa dunga
