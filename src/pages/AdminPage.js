import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import AdminLayout from "../layout/admin/AdminLayout";
import AdminDashboard from "../views/admin/AdminDashboard";
import AdminSchedule from "../views/admin/AdminSchedule";
import AdminLeave from "../views/admin/AdminLeave";
import AdminAccount from "../views/admin/AdminAccount";

const SwitchRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/admin" to="/admin/dashboard" />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/schedule" component={AdminSchedule} />
      <Route path="/admin/leave" component={AdminLeave} />
      <Route path="/admin/account" component={AdminAccount} />
    </Switch>
  );
};

const Wrapper = styled.div`
  background: floralwhite;
  .view-container {
    background: aqua;
  }
`;

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
  );
};

export default AdminPage;
