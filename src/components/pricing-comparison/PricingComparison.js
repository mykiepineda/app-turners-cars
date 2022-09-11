import classes from "./PricingComparison.module.css";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";

const planItems = [
  "One event, one excess",
  "Damage to others",
  "Fire damage",
  "Accidental loss",
  "Damage to your car",
  "Towing",
];

const PricingComparison = () => {
  return (
    <section className={classes.container}>
      <h2 className={classes.heading}>Available plans on offer</h2>
      <p className={classes.body}>
        Find out more about Turners car insurance, and find the right option for
        you. Choose from these flexible plans to get the right cover for your
        car. Buy online today.
      </p>
      <div className={classes.group}>
        <div className={classes.popular}>
          <h4>MOST POPULAR</h4>
        </div>
        <div className={classes.cards}>
          <SecondaryCard
            heading="Third Party, Fire & Theft"
            items={planItems}
            availability={[true,true,true,true,false,false]}
            className={classes["secondary-card-1"]}
          />
          <PrimaryCard
            heading="Comprehensive Everyday Plan"
            items={planItems}
            availability={[true,true,true,true,true,true]}
          />
          <SecondaryCard
            heading="Third Party Only"
            items={planItems}
            availability={[true,true,false,false,false,false]}
            className={classes["secondary-card-2"]}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
