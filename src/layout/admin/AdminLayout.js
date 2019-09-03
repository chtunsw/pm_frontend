import React from "react"
import styled from "styled-components"

import Header from "../../components/header/Header"
import AdminMenu from "../../components/menu/AdminMenu"
import Footer from "../../components/footer/Footer"

const Wrapper = styled.div`

`

const AdminLayout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <AdminMenu />
            {children}
            <Footer />
        </Wrapper>
    )
}

export default AdminLayout