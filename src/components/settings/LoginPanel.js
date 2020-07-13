import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../styles/open-lang.css";
import "../../styles/settings/LoginPanel.scss";

class LoginSettings extends React.Component {
  render() {
    return (
      <div className="LoginPanel">
        <div className="LoginPanel-logo">
          <SettingsIcon className="icon" />
          <p className="text name">
            Facebook 또는 Google을 사용하지 않고 로그인
          </p>
        </div>
        <div className="LoginPanel-content">
          <p className="text">
            앞으로 Facebook이나 Google없이 로그인할 수 있도록 계정에 패스워드를
            추가할 수 있습니다.
          </p>
          <div className="LoginPanel-input-entry">
            <TextField
              id="standard-password-input"
              label="패스워드"
              type="password"
              autoComplete="current-password"
            />

            <TextField
              id="standard-password-input"
              label="패스워드를 재입력해서 확인"
              type="password"
              autoComplete="current-password"
            />
          </div>

          <Button id="submitBtn" variant="contained" color="primary">
            <b>제출</b>
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginSettings;
