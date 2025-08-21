import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import ImageSlider from "./ImageSlider"


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
    grid-area: mBox1;
    text-align: center;
    border-radius: 10px;
`

const MainBox2 = styled.div`
    position: relative;
    grid-area: mBox2;
    text-align: center;
`

const MainBox3 = styled.div`
    grid-area: mBox3;
    text-align: center;
`

const MainBox4 = styled.div`
    grid-area: mBox4;
    text-align: center;
`


const Mbox3Text = styled.h3`
    margin: 0;
    line-height: 200px;
`
const Mbox4Text = styled.h3`
    margin: 0;
    line-height: 200px;
`

const C1C2Box = styled.div`
    position: absolute;
    left: 0;
    width: 400px;
    height: 200px;
`

const CmenuContainer = styled.div`
    padding: 2px;
    display: grid;
    width: 400px;
    height: 50px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50px;
    gap: 2px;
`

const Cmenu1 = styled.div`
    padding: 2px;
    border-radius: 10px;
    color: white;
    line-height: 50px;
    text-align: center;
    background-color: ${props => props.selected ? "#1a237e" : "#263238"};
`

const Cmenu2 = styled.div`
    padding: 2px;
    border-radius: 10px;
    color: white;
    line-height: 50px;
    text-align: center;
    background-color: ${props => props.selected ? "#263238" : "#1a237e"};
`

const Announcement = styled.div`
    z-index: 5;
    position: absolute;
    left: 0;
    width: 400px;
    height: 150px;
    background-color: white;
    text-align: center;
    display: ${props => props.$show ? 'block' : 'none'};
    display: flex;
    align-items: center;
    border-radius: 10px;
`

const Gallery = styled.div`
    z-index: 5;
    position: absolute;
    left: 0;
    width: 400px;
    height: 150px;
    background-color: white;
    text-align: center;
    display: ${props => props.$show ? 'block' : 'none'};
    display: flex;
    align-items: center;
`

const AnounceUl = styled.ul`
    z-index: 10;
    padding: 0 20px;
    margin: 0;
`
const AnounceText = styled.li`
    z-index: 15;
    list-style: none;
    margin-bottom: 8px;
    padding: 0;
`

const Image1 = styled.img`
  padding: 2px;
  width: 400px;
  height: 150px;
  object-fit: cover;  
  display: block;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08); 
`

export default function MainContent() {
    const [selected, setSelected] = useState(false)

    return (
        <>
            <MainWrapper>
                <MainConatiner>
                    <MainBox1>
                        <ImageSlider />
                    </MainBox1>
                    <MainBox2>
                        <C1C2Box>
                            <CmenuContainer>
                                <Cmenu1
                                    selected={selected}
                                    onClick={() => {
                                        if (!selected) setSelected(true);
                                        else setSelected(false);
                                    }}>
                                    공지사항
                                </Cmenu1>
                                <Cmenu2
                                    selected={selected}
                                    onClick={() => {
                                        if (selected) setSelected(false);
                                        else setSelected(true);
                                    }}>
                                    갤러리
                                </Cmenu2>
                            </CmenuContainer>
                            <Announcement $show={selected}>
                                <AnounceUl>
                                    <AnounceText>개인정보처리방침 개정 내용 사전 안내</AnounceText>
                                    <AnounceText>패션톡 서비스 일시 중단 안내</AnounceText>
                                    <AnounceText>택배 없는 날 및 공휴일로 인한 배송 지연 안내</AnounceText>
                                    <AnounceText>체험단 신청 대상 회원 등급 변경 안내</AnounceText>
                                </AnounceUl>
                            </Announcement>
                            <Gallery $show={!selected}>
                                <Image1 src="./images/style4.avif" />
                            </Gallery>
                        </C1C2Box>
                    </MainBox2>
                    <MainBox3>
                        <Mbox3Text>
                            배너(C.3)
                        </Mbox3Text>
                    </MainBox3>
                    <MainBox4>
                        <Mbox4Text>
                            바로가기(C.4)
                        </Mbox4Text>
                    </MainBox4>

                </MainConatiner>
            </MainWrapper>
        </>
    )
}