import { type FC } from "react";
import scss from "./TransportCard.module.scss";

const TransportCard: FC = () => {
  return (
    <section className={scss.TransportCard}>
      <div className="container">
        <div className={scss.content}>TransportCard</div>
      </div>
    </section>
  );
};

export default TransportCard;
