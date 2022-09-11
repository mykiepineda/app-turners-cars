import LocationDot from "../icons/LocationDot";
import ChevronDown from "../icons/ChevronDown";
import Envelope from "../icons/Enveloper";
import classes from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={classes.container}>
      <button>
        <LocationDot />
        <span>Locations</span>
        <ChevronDown />
      </button>
      <button>
        <Envelope />
        <span>contact@turners.co.nz</span>
      </button>
    </div>
  );
};

export default TopBar;
