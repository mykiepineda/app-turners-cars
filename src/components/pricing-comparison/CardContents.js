import classes from "./CardContents.module.css";
import CircleCheckIcon from "../icons/CircleCheck";

const Item = (props) => {
  const textClassNames = `${classes["item-text"]} ${!props.available ? classes.unavailable : ""}`;
  const iconColor = props.available ? "#5EAAF6" : "#C4C4C4";
  return (
    <li className={classes.item}>
      <CircleCheckIcon color={iconColor} className={classes["item-icon"]} />
      <span className={textClassNames}>{props.item}</span>
    </li>
  );
};

const CardContents = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>{props.heading}</h3>
      <ul className={classes.items}>
        {props.items.map((item, index) => {
          return <Item item={item} available={props.availability[index]} />;
        })}
      </ul>
      <button
        className={
          props.isPrimary
            ? classes["button-primary"]
            : classes["button-secondary"]
        }
      >
        <span>Get Quote</span>
      </button>
      <button className={classes["button-link"]}>Download Details</button>
    </div>
  );
};

export default CardContents;
