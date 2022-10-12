import React, { useState } from 'react';
import styled from 'styled-components'
import BoardForm from '../components/BoardForm'
import BoardPost from '../components/BoardPost';

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
`