import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../imgs/한반도.png'
import { ResortModal } from './ResortModal';

export function SkiButton(props) {
    const [resortOpen, setResortOpen] = useState(false);

    const openResort = () => {
        setResortOpen(true);
        console.log(resortOpen)
    }

    const closeResort = () => {
        setResortOpen(false);
        console.log(resortOpen);
    }

    return (
        <Button>
            <Region>{props.region}</Region>
            <ResortName onClick={openResort}>{props.name}</ResortName>
            <ResortModal open={resortOpen} close={closeResort} header={props.name} />
        </Button>
        
    )
}

const Button = styled.div`
display: flex;
font-size: 14px;
margin: 20px;
`

const Region = styled.div`
    background-color: #C2CFD8;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    //border: 1px solid #48494B;
    box-shadow: 4px 6px 6px -2px rgba(17, 20, 24, 0.15);
`

const ResortName = styled.div`
    background-color: #FAFAFA;
    border-radius: 0 10px 10px 0;
    padding: 10px;
    //border: 1px solid #48494B;
    box-shadow: 4px 6px 6px -2px rgba(17, 20, 24, 0.15);
`
