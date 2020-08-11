import React from "react";

import Home from "./Home";
import Word from "./Word";
import TopNav from "./TopNav";
import Preparing from "./Preparing";
import "../styles/app.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import DreamShowCase from "./DreamShowCase";
import Settings from "./Settings";
import Panel from "./Panel";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";
import LearningSets from "./learning-sets/LearningSets";
import CreateSet from "./CreateSet";

// action for login
import {googleSigned} from  "../actions"
import OpenLangApi from "../apis/openlang";
import history from '../history';

import '../styles/OpenLangTheme.scss';


class App extends React.Component {

  componentDidMount(){
    console.log(window.navigator.language);
    // # SIGNIN CHECK #

    // make axios request for google profile with credentials
    // if error occurs while requesting user profile from server, then it is not signined..
    OpenLangApi.get("/auth/google/profile").then(({data}) => {
      console.log(data.name);

      const payload = {};
      payload.userName = data.name
      payload.userEmail = data.email
      payload.userImage = data.picture

      this.props.googleSigned(payload);
      // window.location.href = `http://localhost:3000/latest`

    }).catch((error) => {
      // 로그인 되지 않아서 아무런 세션이 없는 경우 401 Unauthorized 메세지와 도착
      console.log("로그인 X")
      // window.location.href = `http://localhost:3000/landing`
      // console.log(error.status);
      // alert("노인증!")
    })
  }

  // RouteIf = ({ role, component: Component, ...rest }) => {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) => {
  //         // 권한 체크
  //         if (this.props.auth.isSigned) {
  //           return <FobiddenPage />;
  //         }

  //         if (Component) {
  //           // role을 컴포넌트에 전달
  //           return <Component {...props} role={role} />;
  //         }

  //         return null;
  //       }}
  //     />
  //   );
  // };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/preparing">
            <Preparing />
          </Route>

          <Route exact path="/create-set">
            <div className="createSet">
              <TopNav />
              <CreateSet />
            </div>
          </Route>

          <Route exact path="/experiment/addword">
            <div className="testing">
              <div className="ui huge label">GET /experiment/addword</div>
              <Word />
            </div>
          </Route>

          <Route exact path="/landing">
            <LandingPage />
          </Route>

          <Route path="/">
            <div className="home container brightblue">
              <div className="top-nav">
                <TopNav />
              </div>

              <div className="body">
                <div className="left-nav">
                  <Panel />
                </div>

                <div className="content">
                  <Switch>
                    <Route exact path="/latest">
                      <Home />
                    </Route>
                    <Route exact path="/diagram-showcase">
                      <DreamShowCase />
                    </Route>
                    <Route exact path="/settings">
                      <Settings />
                    </Route>
                    {/* <Route exact path="/refer-a-friend">
            <ReferAFriend />
          </Route> */}
                    <Route exact path="/:email">
                      <LearningSets />
                    </Route>
                    <Route exact path="/:email/folders">
                      <Preparing />
                    </Route>
                    <Route exact path="/:email/classes">
                      <Preparing />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps,{googleSigned})(App);
