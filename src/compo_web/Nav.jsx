
import styled, { createGlobalStyle } from 'styled-components';
import SubList from './SubList';

const NavContainer = styled.div`
    position: absolute;
    z-index: 20;
    top: 20px;
    right: 20px;
    width: 660px; 
    height: 200px;
    margin: 0;
    border: none;
    &:hover > div {
        opacity: 1;
        pointer-events: auto;
    }
`

const NavTopContainer = styled.div`
    display: grid;
    width: 100%;
    height: 50px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50px;
    margin: 0;
`

const NavSubContainer = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    margin: 0;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    opacity: 0;
    pointer-events: none;
    transition: 0.7s ease;
    &:hover > div {
        opacity: 1;
        pointer-events: auto;
    }
`

const TopMenu1 = styled.div`
    margin: 0;
    border: 2px solid black;
    &:hover {
        background-color: black;
        color: white;
    }
`

const TopMenu2 = styled.div`
    margin: 0;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    &:hover {
        background-color: black;
        color: white;
    }
`

const TopMenu3 = styled.div`
    margin: 0;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    &:hover {
        background-color: black;
        color: white;
    }
`

const TopMenu4 = styled.div`
    margin: 0;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    &:hover {
        background-color: black;
        color: white;
    }
`

const SubMenu1 = styled.div`
    float: left;
    width: 25%;
    height: 100%;
    margin: 0;
    &:hover > div {
        opacity: 1;
        pointer-events: auto;
    }
`

const SubMenu2 = styled.div`
    float: left;
    width: 25%;
    height: 100%;
    margin: 0;
    &:hover > div {
        opacity: 1;
        pointer-events: auto;
    }
`

const SubMenu3 = styled.div`
    float: left;
    width: 25%;
    height: 100%;
    margin: 0;
    &:hover > div {
        opacity: 1;
        pointer-events: auto;
    }
`

const SubMenu4 = styled.div`
    float: left;
    width: 25%;
    height: 100%;
    margin: 0;
    &:hover > div {
        opacity: 1;
        pointer-events: auto;
    }
`

const NavTopText1 = styled.h3`
    margin: 0;
    line-height: 50px;
    text-align: center;
    
`

const NavTopText2 = styled.h3`
    margin: 0;
    line-height: 50px;
    text-align: center;
`

const NavTopText3 = styled.h3`
    margin: 0;
    line-height: 50px;
    text-align: center;
`

const NavTopText4 = styled.h3`
    margin: 0;
    line-height: 50px;
    text-align: center;
`

export default function Nav() {

    return(
        <>
            <NavContainer>
                    <NavTopContainer>
                        <TopMenu1>
                            <NavTopText1>MENU-1</NavTopText1>
                        </TopMenu1>
                        <TopMenu2>
                            <NavTopText2>MENU-2</NavTopText2>
                        </TopMenu2>
                        <TopMenu3>
                            <NavTopText3>MENU-3</NavTopText3>
                        </TopMenu3>
                        <TopMenu4>
                            <NavTopText4>MENU-4</NavTopText4>
                        </TopMenu4>
                    </NavTopContainer>
                    <NavSubContainer>
                        <SubMenu1>
                            <SubList name1="블라우스"
                                name2="티"
                                name3="셔츠"
                                name4="니트" />
                        </SubMenu1>
                        <SubMenu2>
                            <SubList name1="자켓"
                                name2="코트"
                                name3="가디건"
                                name4="머플러" />
                        </SubMenu2>
                        <SubMenu3>
                            <SubList name1="청바지"
                                name2="짧은바지"
                                name3="긴바지"
                                name4="레깅스" />
                        </SubMenu3>
                        <SubMenu4>
                            <SubList name1="귀고리"
                                name2="목걸이"
                                name3="반지"
                                name4="팔찌" />
                        </SubMenu4>
                    </NavSubContainer>
                </NavContainer>
        </>
    )
}