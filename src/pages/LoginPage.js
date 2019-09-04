import React, { useEffect } from "react";
import styled from "styled-components";

//redux
import { connect } from "react-redux";
import { changeUserName, changeUserStatus } from "../redux/actions";

const Wrapper = styled.div``;

const LoginPage = props => {
  // redux update test
  const { changeUserName, changeUserStatus } = props;
  useEffect(() => {
    const testRedux = setTimeout(() => {
      changeUserName({ userName: "user name 1" });
      changeUserStatus({ status: "user status 1" });
    }, 3000);
    return () => clearTimeout(testRedux);
  });
  return (
    <Wrapper>
      login page
      <h1>user name:{props.myUserName}</h1>
      <h1>user status:{props.myStatus}</h1>
    </Wrapper>
  );
};

function mapStateToProps(state) {
  return {
    myUserName: state.user.userName,
    myStatus: state.user.status
  };
}

export default connect(
  mapStateToProps,
  { changeUserName, changeUserStatus }
)(LoginPage);
