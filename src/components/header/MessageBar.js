import classes from "./MessageBar.module.css";
import XMark from "../icons/XMark";

const MessageBar = (props) => {
  const onClickHandler = () => {
    props.onMessageDismiss(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.quote}>
        <p className={classes.text}>
          Check out our new insurance quote calculator!{" "}
          <button className={classes.link}>Get started here</button>.
        </p>
      </div>
      <div className={classes["button-container"]}>
        <button onClick={onClickHandler}>
          <XMark color="#ffffff" size="xl" />
        </button>
      </div>
    </div>
  );
};

export default MessageBar;
