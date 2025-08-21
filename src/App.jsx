import Header from "./compo_web/Header"
import styled, { createGlobalStyle } from 'styled-components';
import MainContent from "./compo_web/MainContent";
import Footer from "./compo_web/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
`

function App() {

  return (
    <>
        <GlobalStyle />
        <Header />
        <MainContent />
        <Footer />
    </>
  )
}

export default App
