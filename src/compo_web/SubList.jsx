import styled from "styled-components"

const ListContainer = styled.div`
    background-color: white;
    text-align: center;
    margin: 0;
    display: grid;
    width: 165px;
    height: 150px;
    grid-template-rows: repeat(4, 1fr);
    box-sizing: border-box;
`;

const List = styled.div`
    margin: 0;
    font-weight: 700;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
    &::after {
        content: "";
        position: absolute;
        left: 10%;
        width: 80%;
        bottom: 0;
        height: 1px;
        background-color: #eee;
    }
    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;
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

