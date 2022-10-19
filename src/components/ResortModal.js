import React from 'react'
import styled from 'styled-components'

export function ResortModal(props) {
    const clickOutside = (e) => {
        if (e.target.className === "openModal") {
            props.close();
        }
    }
    return (
    <Wrapper className={props.open ? "openModal skiModal" : "skiModal"} onClick={clickOutside}>
        {props.open ? (
            <ResortName>
                {props.header}
                <Button onClick={props.close}>&times;</Button>
            </ResortName>
        ): null}
    </Wrapper>
    )
}

const Wrapper = styled.div`
    .skiModal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .openModal {
        display: flex;
        align-items: center;
        animation: modal-bg-shadow 0.3s;
    }
`

const Button = styled.button`
    outline: none;
    cursor: pointer;
    border: 0;
`

const ResortName = styled.div`

`
