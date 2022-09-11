import classes from "./SecondaryCard.module.css";

import CardContents from "./CardContents";

const SecondaryCard = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <CardContents
        isPrimary={false}
        heading={props.heading}
        items={props.items}
        availability={props.availability}
      />
    </div>
  );
};

export default SecondaryCard;
