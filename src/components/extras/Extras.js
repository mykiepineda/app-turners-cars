import Frame from "./Frame";
import classes from "./Extras.module.css";
import MechanicalBreakDownImage from "../../assets/mechanical-breakdown-image.png";
import MatureWomanDrivingImage from "../../assets/mature-woman-driving-image.png";
import CarKeyTurnoverImage from "../../assets/car-key-turnover-image.png";

const Extras = () => {
  return (
    <section className={classes.container}>
      <div className={classes.group}>
        <h2 className={classes.heading}>Optional extras</h2>
        <p className={classes.body}>
          Take advantage of these insurance add-ons for extra peace of mind.
          Choose from a range of optional covers depending on your budget.
        </p>
      </div>
      <div className={classes.frames}>
        <Frame
          image={MechanicalBreakDownImage}
          alt="Mechanical Breakdown"
          heading="Mechanical breakdown insurance"
        />
        <Frame
          image={MatureWomanDrivingImage}
          alt="Mature Woman Driving"
          heading="Guaranteed asset protection (GAP) insurance"
        />
        <Frame
          image={CarKeyTurnoverImage}
          alt="Car Key Turnover"
          heading="Payment protection insurance"
        />
      </div>
    </section>
  );
};

export default Extras;
