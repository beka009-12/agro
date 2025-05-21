import { type FC } from "react";
import scss from "./CardLogis.module.scss";

const CardLogis: FC = () => {
  return (
    <article className={scss.card}>
      <div className={scss.imageWrapper}>
        <img
          src="https://www.rbauto.ru/upload/resize_cache/webp/iblock/8e7/3rf7cpgmyxma6g3ivuycnfu9e2ooyj66.webp"
          alt="Фура"
          className={scss.image}
        />
        <span className={`${scss.status} ${scss.available}`}>доступен</span>
      </div>
      <div className={scss.info}>
        <h3 className={scss.name}>Фура</h3>
        <div className={scss.details}>
          <div className={scss.detail}>
            <span>Грузоподъёмность:</span>
            <strong>2 т</strong>
          </div>
          <div className={scss.detail}>
            <span>Местоположение:</span>
            <strong>г. Ош</strong>
          </div>
          <div className={scss.detail}>
            <span>Цена:</span>
            <strong>20 сом/кг</strong>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardLogis;
