import classes from "./Item.module.css";
import Circle from "../icons/Circle";

const Item = (props) => {
  return (
    <div className={classes.container}>
      <Circle color="#5EAAF6" size="2xs"/>
      <span className={classes.text}>{props.description}</span>
    </div>
  );
};

export default Item;
