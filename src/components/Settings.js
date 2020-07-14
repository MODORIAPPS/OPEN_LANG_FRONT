import React from "react";
import LoginPanel from "./settings/LoginPanel";
import DeleteAccountPanel from "./settings/DeleteAccountPanel";
import "../styles/SettingsBox/Settings.scss";

class Settings extends React.Component {
  render() {
    return (
      <div className="Settings">
        <LoginPanel />
        <DeleteAccountPanel />
      </div>
    );
  }
}

export default Settings;
