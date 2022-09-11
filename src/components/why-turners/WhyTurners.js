import KnowledgableTeamIcon from "../../assets/knowledgable-team-icon.png";
import BestCoverageRatesIcon from "../../assets/best-coverage-rates-icon.png";
import ProfessionalServiceIcon from "../../assets/professional-service-icon.png";
import classes from "./WhyTurners.module.css";
import Card from "./Card";

const WhyTurners = () => {
  return (
    <section className={classes.container}>
      <h2 className={classes.heading}>Choose your insurance today</h2>
      <p className={classes["sub-heading"]}>
        If you're looking for affordable car insurance, Turners is the place to
        go. We have some of the lowest rates around, and we're always working to
        find new ways to save our customers money.{" "}
      </p>
      <div className={classes.cards}>
        <Card
          icon={KnowledgableTeamIcon}
          alt="Knowledgable Team Icon"
          heading="Knowledgable team"
          items={[
            "Find instant answers",
            "Dedicated local team",
            "Friendly and reliable",
          ]}
        />
        <Card
          icon={BestCoverageRatesIcon}
          alt="Best Coverage Rates Icon"
          heading="Best coverage rates"
          items={[
            "Lowest market rates",
            "Massive discounts",
            "Save as much as 20%",
          ]}
        />
        <Card
          icon={ProfessionalServiceIcon}
          alt="Professional Service Icon"
          heading="Professional Service"
          items={[
            "Top-notch after sales",
            "Quality support",
            "Shorter wait times",
          ]}
        />
      </div>
    </section>
  );
};

export default WhyTurners;
