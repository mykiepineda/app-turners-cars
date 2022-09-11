import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div>
        <h4>{props.heading}</h4>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Card;
