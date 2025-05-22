import { type FC, useState } from "react";
import scss from "./Cards.module.scss";
import CardLogis from "../../../ui/CardLogis";
import { IoIosClose } from "react-icons/io";

const Cards: FC = () => {
  const allCards = Array.from({ length: 8 });
  const [visibleCount, setVisibleCount] = useState(12);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleCollapse = () => {
    setVisibleCount(12);
  };

  const isAllVisible = visibleCount >= allCards.length;
  const isExpanded = visibleCount > 12;

  const [modalOpen, setModalOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveCardIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveCardIndex(null);
  };

  return (
    <section className={scss.Cards}>
      <div className="container">
        <h2 className={scss.filterTitle}>Продукты</h2>
        <div className={scss.content}>
          {allCards.slice(0, visibleCount).map((_, index) => (
            <div key={index} onClick={() => openModal(index)}>
              <CardLogis />
            </div>
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

      {modalOpen && (
        <div className={scss.modalOverlay} onClick={closeModal}>
          <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
            <button className={scss.close} onClick={closeModal}>
              <IoIosClose />
            </button>

            <div className={scss.modalLeft}>
              <div className={scss.driverPhotoContainer}>
                <img
                  src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"
                  alt="Водитель"
                  className={scss.driverPhoto}
                />
                <div className={`${scss.statusBadge} ${scss.statusAvailable}`}>
                  ✅ Доступен
                </div>
              </div>
              <div className={scss.driverName}>Асанбек Токтогулов</div>
              <button className={scss.contactBtn}>Связаться</button>
            </div>

            <div className={scss.modalRight}>
              <h2 className={scss.modalTitle}>
                Детали транспорта #{activeCardIndex! + 1}
              </h2>
              <div className={scss.modalContent}>
                <div className={scss.detailItem}>
                  <span>
                    <strong>Тип транспорта:</strong> Фура
                  </span>
                </div>
                <div className={scss.detailItem}>
                  <span>
                    <strong>Грузоподъёмность:</strong> 2 т
                  </span>
                </div>
                <div className={scss.detailItem}>
                  <span>
                    <strong>Местоположение:</strong> г. Ош
                  </span>
                </div>
                <div className={scss.detailItem}>
                  <span>
                    <strong>Цена:</strong> 20 сом/кг
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cards;
