import LinkList from "./LinkList";
import classes from "./TopNavbar.module.css";

const LINKS = [
  {
    heading: "CARS",
    links: [
      "How to Buy",
      "Sell Your Car",
      "Finance & Insurance",
      "Auctions & Events",
      "Buyer & Seller Fees",
      "Vehicle Sale Price History Tool",
      "Shipping Costs",
    ],
  },
  {
    heading: "FINANCE & INSURANCE",
    links: [
      "Finance Homepage",
      "Car & Personal Finance",
      "Loan Calculator",
      "Car Insurance",
      "Mechanical Breakdown Insurance",
      "General Insurances",
      "Trucks Finance",
      "Financial Information",
    ],
  },
  {
    heading: "SEARCH FOR",
    links: [
      "Cars",
      "Trucks & Machinery",
      "Damaged & End of Life Cars",
      "Boats & Marine",
      "Motorcycles & Scooters",
      "General Goods",
      "Buses, Caravans & Motorhomes",
      "Turners Auction Schedule",
    ],
  },
  {
    heading: "ABOUT US",
    links: [
      "Overview",
      "Turners Careers",
      "Terms and Conditions",
      "Privacy Policy",
      "Turners Live",
      "The Good Oil Blog",
      "Email Alerts",
      "Contact Us",
    ],
  },
];

const TopNavbar = () => {
  return (
    <section className={classes.container}>
      <div className={classes.group}>
        {LINKS.map((link) => {
          return <LinkList heading={link.heading} links={link.links} />;
        })}
      </div>
    </section>
  );
};

export default TopNavbar;
