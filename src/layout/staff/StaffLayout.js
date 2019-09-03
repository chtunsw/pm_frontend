import React from "react"
import styled from "styled-components"

import Header from "../../components/header/Header"
import StaffMenu from "../../components/menu/StaffMenu"
import Footer from "../../components/footer/Footer"

const Wrapper = styled.div`

`

const StaffLayout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <StaffMenu />
            {children}
            <Footer />
        </Wrapper>
    )
}

export default StaffLayout