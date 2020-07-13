import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Avatar from "@material-ui/core/Avatar";
import "../../styles/learning-sets/LearningSetsPanel.scss";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const LearningSetsPanel = (props) => {
  const classes = useStyles();
  return (
    <div className="LearningSetsPanel">
      <Avatar
        id="LearningSetsPanel-avatar"
        alt={props.userName}
        src={props.userImage}
        className={classes.large}
      />
      <div className="LearningSetsPanel-vertical">
        <p className="text title">{props.userName}</p>
        <div className="LearningSetsPanel-control">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Link to={"/" + props.userEmail + "/recent"}>
              <Button>최근 활동</Button>
            </Link>
            <Link to={"/" + props.userEmail}>
              <Button>내가 만든 세트</Button>
            </Link>
            <Link to={"/" + props.userEmail + "/studied"}>
              <Button>학습 완료</Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default LearningSetsPanel;
