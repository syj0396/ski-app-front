import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { getSinglePost } from '../../action/board';
import styled from 'styled-components'

export function BoardDetail() {
    const post = useSelector(state => state.board.post);
    const dispatch = useDispatch();
    let {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getSinglePost(id));
        }
    }, [dispatch, id]);
    return (
        <Container>
            <h1>{post.title}</h1>
        </Container>
    )
}

const Container = styled.div`

`