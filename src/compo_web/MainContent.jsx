import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import ImageSlider from "./ImageSlider"
import MainBox2 from "./MainBox2"

const MainWrapper = styled.div`
    margin: 0 auto;
`

const MainConatiner = styled.div`
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    display: grid;
    border-top: 0px;
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: 300px 200px;
    grid-gap: 0;
    grid-template-areas: 
    "mBox1 mBox1 mBox1"
    "mBox2 mBox3 mBox4";
`

const MainBox1 = styled.div`
    position: relative;
    z-index: 3;
    grid-area: mBox1;
    text-align: center;
    border-radius: 10px;
`

const MainBox3 = styled.div`
    grid-area: mBox3;
    text-align: center;
`

const MainBox4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
    text-decoration: none;
    grid-area: mBox4;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
`

const Mbox4Text = styled.h3`
    margin: 0;
    line-height: 200px;
`

export default function MainContent() {
    

    return (
        <>
            <MainWrapper>
                <MainConatiner>
                    <MainBox1>
                        <ImageSlider />
                    </MainBox1>
                    <MainBox2 />
                    <MainBox3>
                       ?????
                    </MainBox3>
                    <MainBox4>
                        <Mbox4Text>
                            <a href="https://developer.mozilla.org/ko/">MDN을 참고하세요.</a>
                        </Mbox4Text>
                    </MainBox4>

                </MainConatiner>
            </MainWrapper>
        </>
    )
}
