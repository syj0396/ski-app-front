import React, { useState } from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

function BoardForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.prefentDefault();

        {/*}
        props.onSubmit({
            //id: 어떻게..? auto-increment 이런거 있으면 좋을텐데
            text: input
        })*/}
        setInput('');

    }
    return (
        <Form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='스키장 이름, 글 제목, 단어 검색'
                value={input}
                name='text'
                className='boardForm-input'
                onChange={handleChange}
            />
            <button><BiSearch className='board-searchBtn' /></button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    padding: 20px 20px 20px 20px;

    .boardForm-input {
        flex: 1 1;
        height: 30px;
        padding: 3px 7px;
        background-color: #FAFAFA;
        border: 1px solid #CCCCCC;
        border-radius: 5px;
    }

    button{
        background-color:#543A3A;
        border: #CCCCCC;
        border-radius: 5px;
        width: 2rem;
        margin-left: 7px;
    }

    .board-searchBtn {
        color: #FAFAFA;
    }
`

export default BoardForm
