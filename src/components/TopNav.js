import React from "react";
import "../styles/TopNav.scss";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
class TopNav extends React.Component {

  state = {
    searchMode: false,
  };

  toggle = () => {
    const target = this.state.searchMode ? false : true;
    this.setState({
      searchMode: target,
    });
  };

  componentDidMount(){
    axios.get("http://localhost:8006/auth/profile", {
      withCredentials: true
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    })
  }

  renderViews() {
    if (this.state.searchMode) {
      return (
        <a href="http://localhost:8006/auth/signin">
 <div className="TopNav-searchbar">
          <SearchIcon className="searchbar-icon" />
          <input className="searchbar-input" type="text" />
          <CloseIcon onClick={this.toggle} className="searchbar-close" />
        </div>
        </a>
       
      );
    } else {
      return (
        <div className="TopNav-nav-tools">
          <div onClick={this.toggle} className="TopNav-tool search">
            <SearchIcon />
            <p>검색</p>
          </div>

          <div className="TopNav-nav-div" />

          <Link to="/create-set">
            <div className="TopNav-tool create">
              <EditIcon />
              <p>작성하기</p>
            </div>
          </Link>

          <GoogleAuth className="TopNav-auth-btn" />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="TopNav">
        <div className="TopNav-wrapper">
          <div className="TopNav-left-content">
            <Link to="/latest">
              <h2>OPEN LANG</h2>
            </Link>

            
          </div>
          
          {this.renderViews()}
          
        </div>
      </div>
    );
  }
}

export default TopNav;
