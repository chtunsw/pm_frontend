import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import StaffLayout from "../layout/staff/StaffLayout";
import StaffDashBoard from "../views/staff/StaffDashboard";
import StaffSchedule from "../views/staff/StaffSchedule";
import StaffLeave from "../views/staff/StaffLeave";
import StaffAccount from "../views/staff/StaffAccount";

const SwitchRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/staff" to="/staff/dashboard" />
      <Route path="/staff/dashboard" component={StaffDashBoard} />
      <Route path="/staff/schedule" component={StaffSchedule} />
      <Route path="/staff/leave" component={StaffLeave} />
      <Route path="/staff/account" component={StaffAccount} />
    </Switch>
  );
};

const Wrapper = styled.div`
  background: floralwhite;
  .view-container {
    background: aqua;
  }
`;

const StaffPage = () => {
  return (
    <StaffLayout>
      <Wrapper>
        staff page
        <div className="view-container">
          <SwitchRoutes />
        </div>
      </Wrapper>
    </StaffLayout>
  );
};

export default StaffPage;
