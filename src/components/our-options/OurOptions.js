import InsuranceFeaturesImage from "../../assets/insurance-features-image.png";
import classes from "./OurOptions.module.css";
import Frame from "./Frame";

const OurOptions = () => {
  return (
    <section className={classes.container}>
      <div className={classes["image-container"]}>
        <img
          src={InsuranceFeaturesImage}
          alt="Insurance Features"
          className={classes.image}
        />
      </div>
      <Frame />
    </section>
  );
};

export default OurOptions;
