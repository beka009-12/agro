import { type FC } from "react";
import scss from "./HomePage.module.scss";
import HomeFilter from "./homeageSections/HomeFilter";
import Cards from "./homeageSections/Cards";

const HomePage: FC = () => {
  return (
    <div className={scss.HomePage}>
      <HomeFilter />
      <Cards />
    </div>
  );
};

export default HomePage;
