import React from 'react'
import styled from 'styled-components'
import { ClubListForm } from '../components/Club/ClubListForm'

export function Club() {
    return (
    <ClubContainer>
        <ClubListForm />
    </ClubContainer>
    )
}

const ClubContainer = styled.div`
    margin-top: 20px;
`