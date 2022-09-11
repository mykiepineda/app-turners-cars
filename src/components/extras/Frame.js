import ChevronRight from "../icons/ChevronRight";
import classes from "./Frame.module.css";

const Frame = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.alt} className={classes.image}/>
      <h3 className={classes.heading}>{props.heading}</h3>
      <button className={classes.button}>
        <span>Learn More</span>
        <ChevronRight color="#5eaaf6" size="xs"/>
      </button>
    </div>
  );
};

export default Frame;
