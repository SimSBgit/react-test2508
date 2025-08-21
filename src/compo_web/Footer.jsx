import styled from "styled-components"

const FootWrapper = styled.div`
    margin: 0 auto;
`

const FootContainer = styled.div`
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    display: grid;
    border: 1px solid black;
    grid-template-columns: 150px 900px 150px;
    grid-template-rows: 100px;
    grid-gap: 0;
`

const Fbox1 = styled.div`
    border-right: 2px dotted black;
    text-align: center;
`

const Fbox2 = styled.div`
    border-right: 2px dotted black;
    text-align: center;
`

const Fbox3 = styled.div`
    text-align: center;
`

const Fbox1Text = styled.h3`
    margin: 0;
    line-height: 100px;
`

const Fbox2Text = styled.h3`
    margin: 0;
    line-height: 100px;
`

const Fbox3Text = styled.h3`
    margin: 0;
    line-height: 100px;
`

export default function Footer() {

    return(
        <>
            <FootWrapper>
                <FootContainer>
                    <Fbox1>
                        <Fbox1Text>
                            로고
                        </Fbox1Text>
                    </Fbox1>
                    <Fbox2>
                        <Fbox2Text>
                            Copyright
                        </Fbox2Text>
                    </Fbox2>
                    <Fbox3>
                        <Fbox3Text>
                            SNS
                        </Fbox3Text>
                    </Fbox3>
                </FootContainer>
            </FootWrapper>
        </>
    )
}