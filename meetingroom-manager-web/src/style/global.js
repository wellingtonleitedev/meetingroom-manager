import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #528d41;
        font-family: 'Helvetica';
    }

    li{
        list-style: none;
    }

    a{
        color: inherit;
        text-decoration: none;
        
        &hover{
            text-decoration: none;
        }
    }

`

export default GlobalStyle;