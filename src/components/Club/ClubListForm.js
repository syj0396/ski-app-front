import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export function ClubListForm() {
    //스키장 state 받아와서 grid에 표시
    //동호회 리스트   +
    const resorts = useSelector(state => state.resort.resorts);


    return (
    <Wrapper>
        <ResortBtn>
            <div></div><Resort>[전체]</Resort><div></div>
            {resorts.map(resort => (
                <Resort key={resort.id}>{resort.name}</Resort>
            ))}
        </ResortBtn>
        <Top>
            <div></div><div className="clubList-title">동호회 리스트</div><div className="clubList-plus">+</div>
        </Top>
    </Wrapper>
    )
}

const Wrapper = styled.div`
margin: 60px 40px;
position: fixed;
top: 0;
left: 0;
right: 0;
background-color: white;
`
const ResortBtn = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Resort = styled.div`
font-size: 12px;
text-align: center;
margin: 5px;
border-bottom: 1px solid #CCCCCC;
padding: 5px;
`
const Top = styled.div`
display: flex;
justify-content: space-between;
padding: 30px 50px;
.clubList-title{
    font-weight: bold;
    padding-top: 13px;
    padding-left: 13px;
}
.clubList-plus{
    font-size: 30px;
    background-color: #6B89A5;
    color: #FAFAFA;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    border-radius: 25px;
}
`