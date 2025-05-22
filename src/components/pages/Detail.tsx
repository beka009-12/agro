import { type FC } from "react";
import DetailPage from "./detail/DetailPage";
import Logistic from "./homeageSections/filterSections/Logistic";

const Detail: FC = () => {
  return (
    <div>
      <DetailPage />
      <Logistic />
    </div>
  );
};

export default Detail;
