import React from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import "../../styles/settings/DeleteAccountPanel.scss";

class DeleteAccountPanel extends React.Component {
  render() {
    return (
      <div className="DeleteAccountPanel">
        <div className="DeleteAccountPanel-logo">
          <CloseIcon className="icon" />
          <p className="text name">계정을 삭제</p>
        </div>
        <div className="DeleteAccountPanel-content">
          <p className="text name">{this.props.auth.userName} (을)를 영구히 삭제</p>
          <p className="text">
            주의하세요! 모든 데이터가 삭제되며 이전으로 되돌릴 수 없습니다.
          </p>
          <Button variant="contained" color="secondary" className="DeleteAccountPanel-delete-btn">
            <b>삭제</b>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(DeleteAccountPanel);
