import TinaArrowImage from "../../assets/tina-arrow-image.png";
import BlueSuzukiCarPartyImage from "../../assets/blue-suzuki-car-party-image.png";
import ChevronTireTracksBackground from "../../assets/chevron-tire-tracks-background.png";

import classes from "./BottomCTA.module.css";

const BottomCTA = () => {
  return (
    <section className={classes.container}>
      <img
        src={ChevronTireTracksBackground}
        alt="Chevron Tire Tracks"
        className={classes.background}
      />
      <div className={classes["element-group"]}>
        <img
          src={TinaArrowImage}
          alt="Tina Pointing"
          className={classes["foreground-1"]}
        />
        <img
          src={BlueSuzukiCarPartyImage}
          alt="Blue Suzuki Car"
          className={classes["foreground-2"]}
        />
        <div className={classes["group-text"]}>
          <h3>Getting a quote online couldn’t be easier. </h3>
          <p>
            Ensure you’re getting the right insurance plan for your vehicle. You
            don’t even need to pick up the phone to start your cover!
          </p>
        </div>
        <button className={classes.button}>
          <span>Start your quick quote</span>
        </button>
      </div>
    </section>
  );
};

export default BottomCTA;
