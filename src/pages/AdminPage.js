import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"

import AdminLayout from "../layout/admin/AdminLayout"
import AdminDashboard from "../views/admin/AdminDashboard"

const SwitchRoutes = () => {
    return (
        <Switch>
            <Redirect exact from="/admin" to="/admin/dashboard" />
            <Route path="/admin/dashboard" component={AdminDashboard} />
        </Switch>
    )
}

const Wrapper = styled.div`
    background: floralwhite;
    .view-container {
        background: aqua;
    }
`

const AdminPage = () => {
    return (
        <AdminLayout>
            <Wrapper>
                admin page
                <div className="view-container">
                    <SwitchRoutes />
                </div>
            </Wrapper>
        </AdminLayout>
    )
}

export default AdminPage