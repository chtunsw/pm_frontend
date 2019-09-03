import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"

import StaffLayout from "../layout/staff/StaffLayout"
import StaffDashBoard from "../views/staff/StaffDashboard"

const SwitchRoutes = () => {
    return (
        <Switch>
            <Redirect exact from="/staff" to="/staff/dashboard" />
            <Route path="/staff/dashboard" component={StaffDashBoard} />
        </Switch>
    )
}

const Wrapper = styled.div`
    background: floralwhite;
    .view-container {
        background: aqua;
    }
`

const StaffPage = () => {
    return (
        <StaffLayout>
            <Wrapper>
                staff page
                <div className="view-container">
                    <SwitchRoutes />
                </div>
            </Wrapper>
        </StaffLayout>)
}

export default StaffPage