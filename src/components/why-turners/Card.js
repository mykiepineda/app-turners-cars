import CircleCheck from "../icons/CircleCheck";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <img src={props.icon} alt={props.alt} className={classes.icon} />
        <h3 className={classes.heading}>{props.heading}</h3>
        <div className={classes.items}>
          {props.items.map((item) => (
            <div className={classes.item}>
              <CircleCheck color="#5EAAF6" className={classes["item-icon"]} />
              <span className={classes["item-text"]}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
