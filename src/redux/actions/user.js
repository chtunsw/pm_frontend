export const changeUserName = ({ userName }) => ({
  type: "CHANGE_USER_NAME",
  userName
});
export const changeUserStatus = ({ status }) => ({
  type: "CHANGE_USER_STATUS", //compulsory key!
  status
});
