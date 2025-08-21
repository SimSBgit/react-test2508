import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './Nav';

const GlobalStyle = createGlobalStyle`
    li {
        list-style: none;
    }
   
   * {box-sizing: border-box;
   }
    `

const HeaderWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

const TopContainer = styled.div`
    margin: 0 auto;
    display: grid;
    width: 1200px;
    height: 100px;
    grid-template-columns: 150px 1050px;
    grid-template-rows: 100px;
`

const FlexBox1 = styled.div`
    line-height: 100px;
`

const FlexBox2 = styled.div`
    line-height: 100px;
`


const Image1 = styled.img`
  padding: 2px;
  width: 150px;
  height: 100px;
  object-fit: cover;  
  display: block;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08); 
`

export default function Header() {
    // const [activeMenu, setActiveMenu] = useState(null);

    return (
        <>
            <GlobalStyle />
            <HeaderWrapper>
                <TopContainer>
                    <FlexBox1>
                        <Image1 src='public/logo.avif' />
                    </FlexBox1>
                    <FlexBox2 />
                </TopContainer>
                <Nav />
            </HeaderWrapper>
        </>
    )
}

// public/image1.jpg, public/image2.png

