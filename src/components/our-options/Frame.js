import classes from "./Frame.module.css";
import Item from "./Item";

const Frame = () => {
  return (
    <div>
      <h2 className={classes.heading}>Insurance Features</h2>
      <p className={classes.body}>
        Protect you and your family from huge expenses resulting from an
        accident or any other unforeseen event. Plus, enjoy the following
        benefits:
      </p>
      <div className={classes["item-container"]}>
          <Item description="Keys & locks" />
          <Item description="Towing & storage" />
          <Item description="Replacement vehicle cover" />
          <Item description="Optional roadside assistance" />
          <Item description="Emergency travel, accommodation & repairs" />
          <Item description="Optional excess free windscreen and window glass" />
      </div>
      <button className={classes.button}>
        <span className={classes.text}>Start your quote</span>
      </button>
    </div>
  );
};

export default Frame;
