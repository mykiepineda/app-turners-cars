import Phone from "../../icons/Phone";
import classes from "./PhoneUs.module.css";

const PhoneUs = () => {
  return (
    <button className={classes.container}>
      <div>
        <Phone color="#0076be" />
        <span className={classes.phone}>0800 887 637</span>
      </div>
    </button>
  );
};

export default PhoneUs;
