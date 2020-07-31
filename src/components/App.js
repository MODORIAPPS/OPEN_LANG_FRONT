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
import { Redirect } from "react-router-dom";
import LearningSets from "./learning-sets/LearningSets";
import CreateSet from "./CreateSet";

class App extends React.Component {
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
            <div className="home">
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
export default connect(mapStateToProps)(App);
