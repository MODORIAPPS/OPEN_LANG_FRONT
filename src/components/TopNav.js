import React from "react";
import "../styles/TopNav.scss";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";

class TopNav extends React.Component {
  render() {
    return (
      <div className="TopNav">
        <div className="wrapper">
          <div className="TopNav-left-content">
            <Link to="/">
              <h2>OPEN LANG</h2>
            </Link>

            <div className="TopNav-nav-tools">
              <div className="TopNav-tool search">
                <SearchIcon />
                <p>검색</p>
              </div>

              <div className="TopNav-nav-div" />

              <div className="TopNav-tool create">
                <EditIcon />
                <p>작성하기</p>
              </div>
            </div>
          </div>

          <GoogleAuth className="TopNav-auth-btn" />
        </div>
      </div>
    );
  }
}

export default TopNav;
