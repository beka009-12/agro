import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./Card.module.scss";

interface CardProps {
  id: number;
  iamge: string;
  status: string;
}

const Card: FC<CardProps> = ({ id, iamge, status }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <section className={scss.card}>
      <div className={scss.imageBlock}>
        <div className={scss.badge}>{status}</div>
        <div className={scss.imagePlaceholder}>
          <img src={iamge} alt="" />
        </div>
      </div>
      <div className={scss.info}>
        <h3>Органические помидоры</h3>
        <div className={scss.locationRow}>
          <span>Чуйская область</span>
          <span className={scss.amount}>Доступно: 500 кг</span>
        </div>
        <p className={scss.price}>75 сом/кг</p>
        <div className={scss.actions}>
          <button className={scss.orderBtn} onClick={handleClick}>
            Заказать
          </button>
          <button className={scss.contactBtn}>Контакты</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
