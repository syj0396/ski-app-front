import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { HiPencil } from 'react-icons/hi'
import { BsTrashFill, BsFilePost } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'

function BoardListItem() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    return (
        <PostContainer>
            <Top>
                <SkiName>[스키장 이름]</SkiName>
                <div>
                    {isAuth && <HiPencil className="boardPost-icon"/>}
                    <BsTrashFill className="boardPost-icon"/>
                </div>
            </Top>
            <Content>
                <Img>{/*<BsFilePost className="boardPost-imgIcon" />*/}</Img>
                <div>
                    <Title>시즌권 양도합니다</Title>
                    <Detail>와이어프레임에는 없지만 세부 내용이 들어간다면..</Detail>
                </div>
            </Content>
            <Bottom>
                <Empty></Empty>
                <Real>
                    <AiOutlineLike className="boardPost-likeIcon"/>
                    <LikeCnt>5</LikeCnt>
                    <div className="boardPost-bottomText">작성자</div>
                    <div className="boardPost-bottomText">3분 전</div>
                </Real>
            </Bottom>
            
        </PostContainer>
    )
}

const PostContainer = styled.div`
    background-color: #FAFAFA;
    border: 0.1rem solid #CCCCCC;
    border-radius: 10px;
    margin: 10px 20px;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;

    .boardPost-icon{
        width: 1.2rem;
        height: 1.2rem;
        color: #543A3A;
        padding-right: 3px;
    }
`

const SkiName = styled.div`
    font-size: 0.8rem;
`

const Content = styled.div`
    display: flex;
    margin-left: 10px;
    margin-bottom: 10px;

    .boardPost-imgIcon {
        width:80%;
        height: 80%;
    }
`

const Img = styled.div`
    background-color: #C2CFD8;
    width: 70px;
    height: 70px;
    align-items: center;
`

const Title = styled.div`
    margin-left: 10px;
`

const Detail = styled.div`
    font-size: 0.7rem;
    margin-left: 10px;
    margin-top: 4px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    .boardPost-likeIcon {
        color: #543A3A;
        width: 1.2rem;
        height: 1.2rem;
    }
    .boardPost-bottomText {
        font-size: 0.7rem;
        padding: 5px 7px;
    }
`
const Empty = styled.div`
    width:5px;
    height:5px;
`
const Real = styled.div`
    display:flex;
    margin-right: 5px;
    margin-bottom: 4px;
`
const LikeCnt = styled.div`
    padding: 5px 7px 5px 2px;
    font-size: 0.7rem;
`

export default BoardListItem
