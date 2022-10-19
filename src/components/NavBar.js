import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {GrHomeRounded} from 'react-icons/gr'

export function NavBar() {
    const Menus = [
        { name: "자유게시판", dis: "translate-x-0" },
        { name: "카풀", dis: "translate-x" },
        { name: "HOME", dis: "" },
        { name: "같이 타요!", dis: "" },
        { name: "동호회", dis: "" }
    ]
  return (
    <Container>
        <UL>
            {/* {
                Menus.map((menu,i) => (
                    <li key={i}>
                        
                    </li>
                ))
            } */}
        
            <Link to="/board">
                <NavList>자유게시판</NavList>
            </Link>
            <Link to="/board">
                <NavList>카풀</NavList>
            </Link>
            <Link to="/">
                <NavList><GrHomeRounded className="navBar-icon" /></NavList>
            </Link>
            <Link to="/board">
                <NavList>같이 타요!</NavList>
            </Link>
            <Link to="/board">
                <NavList>동호회</NavList>
            </Link>
        </UL>
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4rem;
    background-color: #FAFAFA;
    border-top: 0.01rem solid #CCCCCC;
    border-radius: 20px 20px 0 0;
    align-items: center;
`

const UL = styled.ul`
    display: flex;
    
`

const NavList = styled.li`
    text-decoration: none !important;
    list-style-type: none;
    color: #CCCCCC;
    font-size: 0.9rem;
    //padding-left: 1rem;

    .navBar-icon{
        //position: fixed;
        //bottom: 50;
        width: 1.6rem;
        height: 1.6rem;
        background-color: #C2CFD8;
        padding: 0.6rem;
        border-radius: 20px;
    }
`

