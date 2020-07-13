import React from "react";
import LoginPanel from "./settings/LoginPanel";
import DeleteAccountPanel from "./settings/DeleteAccountPanel";
import "../styles/settings/Settings.scss";

class Settings extends React.Component {
  render() {
    return (
      <div className="settings">
        <LoginPanel />
        <DeleteAccountPanel />
      </div>
    );
  }
}

export default Settings;
