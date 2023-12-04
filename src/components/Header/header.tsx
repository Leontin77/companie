import { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import LogoIcon from "../../images/logo.png";
import BurgerIcon from "../../images/burger.png";

export const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <img className="header-logo" src={LogoIcon} alt="logo" />
        <nav className="navigation">
          {screenWidth > 1200 ? (
            <ul className="navigation-list">
              <li className="navigation-list-item">
                <Link className="link" to="/">
                  Главная
                </Link>
              </li>
              <li className="navigation-list-item">
                <a className="link" href="#">
                  Чем занимается FRA?
                </a>
              </li>
              <li className="navigation-list-item">
                <Link className="link" to="/calculator">
                  Калькулятор
                </Link>
              </li>
              <li className="navigation-list-item">
                <Link className="link" to="/blacklist">
                  Черный список
                </Link>
              </li>
              <li className="navigation-list-item">
                <Link className="link" to="/review">
                Отзывы
                </Link>
              </li>
              <li className="navigation-list-item">
              <Link className="link" to="/contact">
                Контакты
                </Link>
              </li>
            </ul>
          ) : (
            <img src={BurgerIcon} alt="menu" />
          )}
        </nav>
      </div>
    </header>
  );
};
