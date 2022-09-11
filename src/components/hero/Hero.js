import HeroImage from "../../assets/hero-image.png";
import Info from "./Info";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.container}>
      <img src={HeroImage} alt="Stockphoto of a hot looking driver I found free in the internet" className={classes.image}/>
      <Info />
    </section>
  );
};

export default Hero;
