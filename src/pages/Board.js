import React, { useState } from 'react';
import styled from 'styled-components'
import BoardForm from '../components/Board/BoardListForm'
import BoardPost from '../components/Board/BoardListItem';

export function Board() {
    const [posts, setPosts] = useState([]);

    const addPost = post => {

    }
    return(
        <BoardContainer>
            <BoardForm />
            <BoardPost />
            <BoardPost />
            <BoardPost />
        </BoardContainer>
    )
}

const BoardContainer = styled.div`
    color: black;
    margin-top: 20px;
`