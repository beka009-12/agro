import { type FC } from "react";
import scss from "./Header.module.scss";
import logo from "../../../assets/logo.png";
import { link } from "../../../constant/Link";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="logo" />
          </div>
          <nav className={scss.nav}>
            {link.map((item, index) => (
              <Link to={item.link} key={index}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
