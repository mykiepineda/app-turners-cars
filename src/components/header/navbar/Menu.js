import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <MenuItem name="Buy" isDropdown={true} />
      <MenuItem name="Sell" isDropdown={true} />
      <MenuItem name="Finance" />
      <MenuItem name="Insurance" isActive={true} />
      <MenuItem name="About" isDropdown={true} />
    </div>
  );
};

export default Menu;
