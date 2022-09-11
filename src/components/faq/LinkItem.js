import classes from "./LinkItem.module.css";
import CircleIcon from "../icons/Circle";
import ChevronRightIcon from "../icons/ChevronRight";

const LinkItem = (props) => {
  const itemClassNames = `${classes.item} ${
    props.question.active ? classes.active : ""
  }`;

  const iconColor = props.question.active ? "#0076BE" : "#5EAAF6";

  const onClickHandler = () => {
    props.onSelect(props.question);
  };

  return (
    <li
      key={props.question.id}
      id={props.question.id}
      className={itemClassNames}
    >
      <button className={classes.button} onClick={onClickHandler}>
        <div className={classes["button-elements"]}>
          <div>
            <CircleIcon color={iconColor} />
            <span className={classes["question-text"]}>
              {props.question.heading}
            </span>
          </div>
          <ChevronRightIcon color={iconColor} />
        </div>
      </button>
    </li>
  );
};

export default LinkItem;
