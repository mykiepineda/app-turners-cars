import classes from "./OurReputation.module.css";
import OurReputationImage from "../../assets/our-reputation-image.png";
import ChampagneGlassesIcon from "../../assets/champagne-glasses-thin-icon.png";
import MoneyBillWaveIcon from "../../assets/money-bill-wave-thin-icon.png";
import CarIcon from "../../assets/car-thin-icon.png";
import LocationPinIcon from "../../assets/location-pin-thin-icon.png";
import Card from "./Card";

const OurReputation = () => {
  return (
    <section className={classes.container}>
      <div className={classes.group}>
        <div>
          <h2 className={classes.heading}>Our reputation</h2>
          <p className={classes.body}>
            We’ve been helping Kiwis buy and sell used cars for over 50 years.
            And if you want car finance or car insurance, we can sort that out
            for you as well.
          </p>
          <div className={classes.cards}>
            <div className={classes["cards-column-1"]}>
              <Card
                heading="50"
                body="Years in business"
                image={ChampagneGlassesIcon}
                alt="Champagne Glasses"
              />
              <Card
                heading="3000"
                body="Cars in stock"
                image={CarIcon}
                alt="Car"
              />
            </div>
            <div className={classes["cards-column-2"]}>
              <Card
                heading="1m+"
                body="Vehicles sold"
                image={MoneyBillWaveIcon}
                alt="Money Bill Wave"
              />
              <Card
                heading="20"
                body="Locations in NZ"
                image={LocationPinIcon}
                alt="Location Pin"
              />
            </div>
          </div>
        </div>
        <div>
          <img src={OurReputationImage} alt="Our Reputation" />
        </div>
      </div>
    </section>
  );
};

export default OurReputation;
