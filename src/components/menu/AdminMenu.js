import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    overflow: hidden;
    position: fixed;
    width: 0px;
    height: 100%;
    background-color: whitesmoke;
    :hover {
        width: 300px;
    }
`

const AdminMenu = () => {
    return (
        <Wrapper>
            admin menu
        </Wrapper>
    )
}

export default AdminMenu