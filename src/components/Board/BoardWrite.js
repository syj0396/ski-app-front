import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

export function BoardWrite() {
    const resorts = useSelector(state => state.resort.resorts);
    const [showSelectBox, setShowSelectBox] = useState(false);

    const toggleSelectBox = () => {
        setShowSelectBox(!showSelectBox);
    };

    return (
    <Wrapper>
        <div className="write-top">글 작성</div>
        <form>
        <Top>
            <SelectBox>
                <div className="dropdown">
                    <div className="dropdown-btn" onClick={toggleSelectBox}>스키장 선택</div>
                    {showSelectBox && <div className="dropdown-content">
                        {
                            resorts.map(resort => (
                                <div key={resort.id} className="dropdown-item">{resort.name}</div>
                            ))
                        }
                        
                    </div>}
                </div>
            </SelectBox>
            <Title>
                <input 
                    className="boardWrite-title"
                    type="text"
                    placeholder="제목"/>
            </Title>
        </Top>
        <Content>
            <textarea placeholder="내용을 입력하세요">
            </textarea>
        </Content>
        <Buttons>
            <button className="boardWrite-tempSave">임시 저장</button>
            <button className="boardWrite-save">저장</button>
        </Buttons>
        </form>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 30px;

    form {
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
    }


    .write-top{
        text-align: center;
        font-weight: bold;
        margin-bottom: 10px;
    }
`
const Top = styled.div`
    display: flex;

`
const SelectBox = styled.div`
    .dropdown {
        position: relative;
        margin: 10px;
    }

    .dropdown-btn{
        background: #fff;
        box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
        padding: 10px 13px;
        font-size: 14px;
        //font-weight: bold;
        color: gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
    }

    .dropdown-content{
        position: absolute;
        padding: 12px;
        margin-top: 5px;
        margin-left: 0;
        background: #fff;
        box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
        font-weight: bold;
        font-size: 12px;
        color: #333;
        border-radius: 8px;
        width: 90%;
    }

    .dropdown-item{
        padding: 7px;
    }

    .dropdown-item:hover{
        background: #fcfcfc;
    }
`

const Title = styled.div`
    display: flex;
    align-items: center;
    .boardWrite-title{
        width: 100%;
        border: none;
        border-bottom: 1px solid gray;
        padding: 10px 13px;
    }
`
const Content = styled.div`
    margin: 10px;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    textarea {
        width: 70%;
        height: 200px;
        padding: 10px;
        border: 1px solid gray;
    }

`
const Buttons = styled.div`
    display: flex;
    align-items: center;

    button{
        padding: 10px;
        border-radius: 15px;
        border: 1px solid black;
        margin: 5px;
    }

    .boardWrite-tempSave{
        background-color: #FAFAFA;
        border: 1px solid #6B89A5;
        color: #6B89A5;
    }
    .boardWrite-save{
        background-color: #6B89A5;
        border: 1px solid #FAFAFA;
        color: #FAFAFA;
    }
`