import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { DrikutStyles } from '../src/lib/DrikutCommons'

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #D9E6F6;
    font-family: sans-serif;
  }

  #_next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  //imagem responsiva
  img{
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${DrikutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
