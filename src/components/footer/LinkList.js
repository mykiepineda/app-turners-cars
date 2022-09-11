import classes from "./LinkList.module.css";

const ListItem = (props) => {
  return (
    <li>
      <button className={classes.button}>
        <span>{props.link}</span>
      </button>
    </li>
  );
};

const LinkList = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>{props.heading}</h3>
      <ul className={classes.links}>
        {props.links.map((link) => {
          return <ListItem link={link} />;
        })}
      </ul>
    </div>
  );
};

export default LinkList;
