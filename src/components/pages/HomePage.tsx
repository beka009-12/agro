import { type FC } from "react";
import HomeFilter from "./homeageSections/HomeFilter";
import Cards from "./homeageSections/Cards";

const HomePage: FC = () => {
  return (
    <div>
      <HomeFilter />
      <Cards />
    </div>
  );
};

export default HomePage;
