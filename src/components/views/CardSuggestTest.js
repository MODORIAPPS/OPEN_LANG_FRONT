import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import LocalLibraryTwoToneIcon from "@material-ui/icons/LocalLibraryTwoTone";
import "../../styles/CardSuggestTest.css";
import "../../styles/open-lang.css";

import { connect } from "react-redux";
import { closeSuggest } from "../../actions/index";

class CardSuggestTest extends React.Component {
  closeSuggest = () => {
    this.props.closeSuggest();
  };

  render() {
    return (
      <Paper elevation={5} className="CardSuggestTest">
        <div className="icon">
          <LocalLibraryTwoToneIcon id="local-library" />
        </div>
        <div className="card-content">
          <p className="text large">
            친구와 함께하면 더욱 효과적입니다! 
            학습 세트를 공유해서 클래스를
            만들어보세요!
          </p>
          <Button id="button" variant="contained" size="large" color="primary">
            <b>클래스 작성하기</b>
          </Button>
        </div>
        <IconButton onClick={this.closeSuggest} id="closeicon" aria-label="delete">
          <CloseIcon />
        </IconButton>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return { home: state.home };
};

export default connect(mapStateToProps, {
  closeSuggest,
})(CardSuggestTest);
