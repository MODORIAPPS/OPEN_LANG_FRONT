import GoogleLogin from "react-google-login";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Popover from "@material-ui/core/Popover";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { connect } from "react-redux";
import { googleSigned, googleSignOut } from "../actions";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../styles/google-auth.css";
import OpenLangApi from "../apis/openlang";

class GoogleAuth extends React.Component {
  //   componentDidMount() {
  //     // check if auth is vailed;
  //     if (this.props.auth.isSigned) {
  //       // 로그인되어있음
  //     } else {
  //     }
  //   }

  state = {
    modal: false,
    anchorEl: null,
  };

  // // 이미 로그인이 되어있을 때도 호출됨.
  // signInSuccess = (userInfo) => {

  //   //console.log(userInfo);
  //   const payload = {};
  //   payload.userName = userInfo.profileObj.name;
  //   payload.userEmail = userInfo.profileObj.email;
  //   payload.userImage = userInfo.profileObj.imageUrl;
  //   this.props.googleSigned(payload);

  //   const userData = {};
  //   userData.countrycode = "KOR";
  //   userData.username = userInfo.profileObj.name;
  //   userData.email = userInfo.profileObj.email;

  //   OpenLangApi.post("/user/create", {
  //     userData,
  //   }).then((result) => {
  //     console.log(result);
  //   });
  // };

  // Google SignOut
  signOut = () => {
    OpenLangApi.get('/auth/signOut').then((result) => {
      console.log(result);
      this.props.googleSignOut();
      useHistory().push("/");
    }).catch((error) => {
      console.log(error);
    });
  };

  // Google SignIn
  signIn = () => {
    console.log('react');

    const currentLocation = window.location.pathname;
    console.log(currentLocation);
    window.location.href = `http://localhost:8006/auth/signin?loc=${currentLocation}`
  }

  // authFailed = (e) => {
  //   console.log(e);
  // };

  onClicked = (event) => {
    const control = this.state.model ? false : true;
    this.setState({
      modal: control,
      anchorEl: event.currentTarget,
    });
  };

  onClose = () => {
    this.setState({
      model: false,
    });
  };

  renderButton() {
    if (this.props.auth.isSigned) {
      // <GoogleLogout
      //   clientId={process.env.REACT_APP_CLIENT_ID}
      //   buttonText="Logout"
      //   onLogoutSuccess={this.signOutSuccess}
      // />
      return (
        <div className="user-profile">
          <Avatar alt="google-profile" src={this.props.auth.userImage} />
          <div onClick={this.onClicked} className="GoogleAuth-wrapper">
            <p className="user-name">{this.props.auth.userName}</p>
            <ArrowDropDownIcon />
          </div>

          <Popover
            open={this.state.modal}
            onClose={this.onClose}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <List>
              <ListItem
                button
                onClick={() => this.signOut()}
              >
                <ListItemIcon>
                        <MeetingRoomIcon />
                      </ListItemIcon>
                      <ListItemText primary="로그아웃" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="설정" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CardGiftcardIcon />
                </ListItemIcon>
                <ListItemText primary="친구 초대하기" />
              </ListItem>
            </List>
          </Popover>
        </div>
      );
    } else if (!this.props.auth.isSigned) {
      return (
        <Button
              onClick={() => this.signIn()}
              variant="contained"
            >
              로그인
            </Button>
      );
    }
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { googleSigned, googleSignOut })(
  GoogleAuth
);
