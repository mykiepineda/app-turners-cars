import classes from "./MenuItem.module.css";
import ChevronDown from "../../icons/ChevronDown";

const MenuItem = (props) => {
  const textClasses = `${classes.text} ${props.isActive ? classes.active : ""}`;
  return (
    <button className={classes.pricing}>
      <span className={textClasses}>{props.name}</span>
      {props.isDropdown && <ChevronDown className={classes.icon} />}
    </button>
  );
};

export default MenuItem;
