import classes from "./NavBar.module.css";
import turnersCarsLogo from "../../../assets/turnerscars_logo_1line_horz_true-rgb-desktop.png";
import Menu from "./Menu";
import PhoneUs from "./PhoneUs";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <button>
        <img
          src={turnersCarsLogo}
          alt="Turners Cars Logo"
          className={classes.logo}
        />
      </button>
      <Menu />
      <PhoneUs />
    </div>
  );
};

export default NavBar;
