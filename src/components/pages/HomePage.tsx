import { type FC } from "react";
import scss from "./HomePage.module.scss";
import HomeFilter from "./homeageSections/HomeFilter";
import Cards from "./homeageSections/Cards";

const HomePage: FC = () => {
  return (
    <section className={scss.HomePage}>
      <HomeFilter />
      <Cards />
    </section>
  );
};

export default HomePage;
