import { Children } from "react"

const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit Google"
}
const mainContainer  = document.querySelector("#root")
