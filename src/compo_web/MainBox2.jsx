import { useState } from "react"
import styled from "styled-components"

const MainBox2Container = styled.div`
    position: relative;
    grid-area: mBox2;
    text-align: center;
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
    display: flex;
    align-items: center;
    border-radius: 10px;
    opacity: ${props => props.$show ? 1 : 0};
    pointer-events: ${props => props.$show ? 'auto' : 'none'};
`

const Gallery = styled.div`
    position: absolute;
    left: 0;
    width: 400px;
    height: 150px;
    background-color: white;
    text-align: center;
    display: flex;
    align-items: center;
    opacity: ${props => props.$show ? 1 : 0};
    pointer-events: ${props => props.$show ? 'auto' : 'none'};
`

const AnounceUl = styled.ul`
    padding: 0 20px;
    margin: 0;
`
const AnounceText = styled.li`
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



export default function MainBox2() {
    const [selected, setSelected] = useState(false)

    return (
        <>
            <MainBox2Container>
                <C1C2Box>
                    <CmenuContainer>
                        <Cmenu1
                            selected={selected}
                            onClick={() => setSelected(true)}>
                            공지사항
                        </Cmenu1>
                        <Cmenu2
                            selected={selected}
                            onClick={() => setSelected(false)}>
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
                        <Image1 src="public/style4.avif" />
                    </Gallery>
                </C1C2Box>
            </MainBox2Container>
        </>
    )
}