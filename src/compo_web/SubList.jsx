import styled from "styled-components"

const ListContainer = styled.div`
    background-color: white;
    text-align: center;
    margin: 0;
    display: grid;
    width: 165px;
    height: 150px;
    line-height: 37px;
    grid-template-rows: repeat(4, 37px);
`

const List = styled.div`
    margin: 0;
    font-weight: 700;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        left: 20px;
        width: 80%;
        bottom: 3px;
        height: 1px;
        background-color: black;
    }
    &:hover {
            background-color: black;
            color: white;
        }
`

export default function SubList(props) {

    return (
        <>
            <ListContainer>
                <List>{props.name1}</List>
                <List>{props.name2}</List>
                <List>{props.name3}</List>
                <List>{props.name4}</List>
            </ListContainer>
        </>
    )
}

