import Header from "./compo_web/Header"
import styled, { createGlobalStyle } from 'styled-components';
import MainContent from "./compo_web/MainContent";
import Footer from "./compo_web/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`

const BodyWrapper = styled.div`
  margin: 0 auto;
`

function App() {

  return (
    <>
      <GlobalStyle />
      <BodyWrapper>
        <Header />
        <MainContent />
        <Footer />
      </BodyWrapper>
    </>
  )
}

export default App
