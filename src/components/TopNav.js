import React from "react";
import "../styles/TopNav.scss";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import UpgradeSuggestTag from './views/upgradeSuggestTag';
import axios from "axios";
import Auth from './topnav/Auth';

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

  renderViews() {
    if (this.state.searchMode) {
      return (
        <div className="TopNav-searchbar">
        <SearchIcon className="searchbar-icon" />
        <input className="searchbar-input" type="text" />
        <CloseIcon onClick={this.toggle} className="searchbar-close" />
      </div>
       
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

          <Auth />
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
