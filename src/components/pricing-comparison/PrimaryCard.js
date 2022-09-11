import classes from "./PrimaryCard.module.css";

import CardContents from "./CardContents";

const PrimaryCard = (props) => {
  return (
    <div className={classes.container}>
      <CardContents
        isPrimary={true}
        heading={props.heading}
        items={props.items}
        availability={props.availability}
      />
    </div>
  );
};

export default PrimaryCard;
