import { type FC } from "react";
import scss from "./Footer.module.scss";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logoBlock}>
            <img src={logo} alt="Дыйкан" />
            <p>© 2025 Дыйкан. Все права защищены.</p>
          </div>

          <div className={scss.links}>
            <div>
              <h4>Навигация</h4>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/products">Продукты</Link>
                </li>
                <li>
                  <Link to="/about">О нас</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4>Контакты</h4>
              <ul>
                <li>Тел: +996 (XXX) XXX-XXX</li>
                <li>Email: info@dyykan.kg</li>
                <li>Адрес: Кыргызстан, г. Бишкек</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
