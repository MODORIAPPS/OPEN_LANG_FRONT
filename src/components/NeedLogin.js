import React from "react";
import Paper from "@material-ui/core/Paper";
import "../styles/NeedLogin.css";
import GoogleAuth from "./GoogleAuth";

const NeedLogin = (props) => {
  return <Paper elevation={3} className="NeedLogin">
      <h2>로그인하면 사용할 수 있는 기능이에요. </h2>
      <GoogleAuth />
  </Paper>;
};

export default NeedLogin;
