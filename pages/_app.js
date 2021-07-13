import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { DrikutStyles } from '../src/lib/DrikutCommons'


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-image: url("https://images3.alphacoders.com/795/thumb-1920-795621.jpg")
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
