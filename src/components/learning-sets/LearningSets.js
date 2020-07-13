import React from "react";
import "../../styles/learning-sets/LearningSets.scss";
import LearningSetsPanel from "./LearningSetsPanel";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preparing from "../Preparing";

class LearningSets extends React.Component {
  render() {
    return (
      <div className="LearningSets">
        <LearningSetsPanel
          userName={this.props.auth.userName}
          userImage={this.props.auth.userImage}
          userEmail={this.props.auth.userEmail}
        />
        <div className="LearningSets-content">
          <Switch>
            <Route path="/:email">
              <Route exact path="/recent">
                <LearningSets />
              </Route>
              <Route exact path="/">
                <Preparing />
              </Route>
              <Route exact path="/studied">
                <Preparing />
              </Route>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(LearningSets);
