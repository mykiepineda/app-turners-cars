import classes from "./BottomNavbar.module.css";

const BottomNavbar = () => {
  return (
    <section className={classes.container}>
      <div>© 2022 Turners</div>
      <div className={classes.group}>
        <button>Branch Details</button>
        <button>Facebook</button>
        <button>Instagram</button>
        <button>Newsletter</button>
        <button>Email Alerts</button>
      </div>
    </section>
  );
};

export default BottomNavbar;
