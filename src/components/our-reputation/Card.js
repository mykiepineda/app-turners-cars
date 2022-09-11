import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-item"]}>
        <h3 className={classes.heading}>{props.heading}</h3>
        <img src={props.image} alt={props.alt} />
      </div>
      <p className={classes.body}>{props.body}</p>
      <div className={classes.line} />
    </div>
  );
};

export default Card;
