import { Children } from "react"

function customRender(reactElement , container)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
}

const reactElement = {  // giving a tag to render
    type: 'a',         // type of elements
    props:{           // properties of element 
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit Google"
}
const mainContainer  = document.querySelector("#root")

customRender(reactElement, mainContainer) // inject react element in t. he main container
