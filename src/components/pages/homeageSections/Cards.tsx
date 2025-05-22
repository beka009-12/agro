import { type FC, useState } from "react";
import scss from "./Cards.module.scss";
import Card from "../../../ui/Card";

const Cards: FC = () => {
  const allCards = Array.from({ length: 24 });
  const [visibleCount, setVisibleCount] = useState(12);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleCollapse = () => {
    setVisibleCount(12);
  };

  const isAllVisible = visibleCount >= allCards.length;
  const isExpanded = visibleCount > 12;

  return (
    <section className={scss.Cards}>
      <div className="container">
        <h2 className={scss.filterTitle}>Продукты</h2>
        <div className={scss.content}>
          {allCards.slice(0, visibleCount).map((_, index) => (
            <Card
              status="Органик"
              key={index}
              id={index}
              router="details"
              iamge="https://vcagrofinance.kg/wp-content/uploads/2024/03/spring-fruits-65d8f51d00673.jpg"
            />
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
