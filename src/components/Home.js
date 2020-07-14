import React from "react";
import SuggestCard from "./views/SuggestCard";
import { connect } from "react-redux";
import { showSuggest, closeSuggest } from "../actions";
import WordBookCard from "./home/WordBookCard";
import LatestList from "./home/LatestList";
import "../styles/Home.css";

class Home extends React.Component {
  componentDidMount() {
    this.checkSuggestionFromServer();
  }

  checkSuggestionFromServer = () => {
    // 서버로 부터 제안사항이 있는지 체크
    this.props.showSuggest();
  };

  renderSuggest = () => {
    if (this.props.home.suggest) {
      return <SuggestCard />;
    }
  };

  render() {
    return (
      <div className="Home">
        {this.renderSuggest()}
        <LatestList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { home: state.home };
};

export default connect(mapStateToProps, { showSuggest, closeSuggest })(Home);
