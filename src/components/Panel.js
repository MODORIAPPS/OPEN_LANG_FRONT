import React from "react";
import AmpStoriesIcon from "@material-ui/icons/AmpStories";
import HomeIcon from "@material-ui/icons/Home";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import SettingsIcon from "@material-ui/icons/Settings";
import FolderIcon from "@material-ui/icons/Folder";
import PeopleIcon from "@material-ui/icons/People";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import "../styles/Panel.scss";
import { connect } from "react-redux";
import {
  panelHome,
  panelDiagram,
  panelFriend,
  panelSettings,
} from "../actions/panel";

import {
  PANEL_HOME,
  PANEL_DIAGRAM_SHOWCASE,
  PANEL_REFER_A_FRIEND,
  PANEL_SETTINGS,
} from "../actions/types";

class Panel extends React.Component {
  isSelected(type) {
    if (this.props.panel.state === type) {
      return "selected";
    }
  }

  render() {
    return (
      <Paper elevation={5} className="Panel">
        <Link to="/latest">
          <div
            className={`Panel-item ${this.isSelected(PANEL_HOME)}`}
            onClick={() => this.props.panelHome()}
          >
            <div className="Panel-content">
              <HomeIcon />
              <p>홈</p>
            </div>
          </div>
        </Link>

        <Link to="/diagram-showcase" onClick={() => this.props.panelDiagram()}>
          <div
            className={`Panel-item ${this.isSelected(PANEL_DIAGRAM_SHOWCASE)}`}
          >
            <div className="Panel-content">
              <AmpStoriesIcon />
              <p>그림 넣기</p>
            </div>
          </div>
        </Link>
        {/* <Link to="/refer-a-friend" onClick={() => this.props.panelFriend()}>
          <div
            className={`panel-item ${this.isSelected(PANEL_REFER_A_FRIEND)}`}
          >
            <div className="content">
              <CardGiftcardIcon />
              <p>친구에게 소개하기</p>
            </div>
          </div>
        </Link> */}
        <Link to="/preparing" onClick={() => this.props.panelFriend()}>
          <div
            className={`Panel-item ${this.isSelected(PANEL_REFER_A_FRIEND)}`}
          >
            <div className="Panel-content">
              <CardGiftcardIcon />
              <p>친구에게 소개하기</p>
            </div>
          </div>
        </Link>
        <Link to="/settings" onClick={() => this.props.panelSettings()}>
          <div className={`Panel-item ${this.isSelected(PANEL_SETTINGS)}`}>
            <div className="Panel-content">
              <SettingsIcon />
              <p>설정</p>
            </div>
          </div>
        </Link>

        <div className="divider" />

        <Link to={"/" + this.props.auth.userEmail}>
          <div className="Panel-item">
            <div className="Panel-content">
              <AmpStoriesIcon />
              <p>학습 세트</p>
            </div>
          </div>
        </Link>
        <Link to={"/" + this.props.auth.userEmail + "/folders"}>
          <div className="Panel-item">
            <div className="Panel-content">
              <FolderIcon />
              <p>폴더</p>
            </div>
          </div>
        </Link>

        <div className="Panel-subitem">
          <div className="Panel-sub-content">
            <FolderIcon className="highlight" />
            <p className="highlight">새로운 폴더 만들기</p>
          </div>
        </div>

        <Link to={"/" + this.props.auth.userEmail + "/classes"} >
          <div className="Panel-item">
            <div className="Panel-content">
              <PeopleIcon />
              <p>클래스</p>
            </div>
          </div>
        </Link>

        <div className="Panel-subitem">
          <div className="Panel-sub-content">
            <PeopleIcon className="highlight" />
            <p className="highlight">클래스에 가입, 또는 새로 만들기</p>
          </div>
        </div>

        <div className="divider" />

        <p className="text highlight">업그레이드</p>
        <p className="text highlight">고객센터</p>
        <p className="text highlight">개인정보 정책</p>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return { panel: state.panel, auth: state.auth };
};

export default connect(mapStateToProps, {
  panelHome,
  panelDiagram,
  panelFriend,
  panelSettings,
})(Panel);
