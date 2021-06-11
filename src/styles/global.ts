import {createGlobalStyle} from 'styled-components'




export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${// @ts-ignore
        props => props.theme.colors.background};
        color: ${// @ts-ignore
        props => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;
    }
    button {
        position: absolute;
        top: 25%;
        right: 45%;
        padding: 10px 40px;
        font-size: 18px;
        background-color: #444;
        color: chartreuse;
        border: 1px solid chartreuse;
        cursor: pointer;
        border-radius: 20px;
    }
`
