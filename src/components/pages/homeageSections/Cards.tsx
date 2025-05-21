import { type FC, useState } from "react";
import scss from "./Cards.module.scss";
import Card from "../../../ui/Card";

const Cards: FC = () => {
  const allCards = Array.from({ length: 24 });
  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCollapse = () => {
    setVisibleCount(9);
  };

  const isAllVisible = visibleCount >= allCards.length;
  const isExpanded = visibleCount > 9;

  return (
    <section className={scss.Cards}>
      <div className="container">
        <h2 className={scss.filterTitle}>Продукты</h2>
        <div className={scss.content}>
          {allCards.slice(0, visibleCount).map((_, index) => (
            <Card key={index} id={index} />
          ))}
        </div>

        <div className={scss.buttonWrapper}>
          {!isAllVisible && (
            <button className={scss.showMoreBtn} onClick={handleShowMore}>
              Показать ещё
            </button>
          )}
          {isExpanded && (
            <button className={scss.hideBtn} onClick={handleCollapse}>
              Скрыть
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cards;
