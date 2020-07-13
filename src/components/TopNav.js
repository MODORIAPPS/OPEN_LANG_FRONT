import React from "react";
import "../styles/topnav.css";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";

class TopNav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <div className="left-content">
          <Link to="/">
            <h2>OPEN LANG</h2>
          </Link>

          <div className="nav-tools">
            <div className="tool search">
              <SearchIcon />
              <p>검색</p>
            </div>

            <div className="nav-div" />

            <div className="tool create">
              <EditIcon />
              <p>작성하기</p>
            </div>
          </div>
        </div>

        <GoogleAuth className="auth-btn" />
      </div>
    );
  }
}

export default TopNav;
