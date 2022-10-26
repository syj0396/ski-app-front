import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../action/board';
import styled from 'styled-components';
import BoardListForm from '../components/Board/BoardListForm';
import BoardListItem from '../components/Board/BoardListItem';

export function Board() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.board.posts);

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    return(
        <BoardContainer>
            <BoardListForm />
            <POSTS>
            {posts && posts.slice(0).reverse().map((post) => (
                <BoardListItem key={post.id} {...post} />
            ))
            }
            </POSTS>
        </BoardContainer>
    )
}

const BoardContainer = styled.div`
    color: black;
    margin-top: 20px;
`
const POSTS = styled.div`
    margin-top: 260px;
`