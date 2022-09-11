import classes from "./Info.module.css";

const Info = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Get car insurance from the car experts</h1>
      <p className={classes.content}>
        We’ve got you covered from comprehensive, third party fire & theft, to
        third party property damage. Start saving money on your premiums.
      </p>
      <button className={classes.button}><span>Get a quote</span></button>
    </div>
  );
};

export default Info;
