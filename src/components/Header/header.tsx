import { useState, useEffect } from "react";
import "./header.scss";
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
                <a className="link" href="#">Главная</a>
              </li>
              <li className="navigation-list-item">
                <a className="link" href="#">Чем занимается FRA?</a>
              </li>
              <li className="navigation-list-item">
                <a className="link" href="#">Калькулятор</a>
              </li>
              <li className="navigation-list-item">
                <a className="link" href="#">Черный список</a>
              </li>
              <li className="navigation-list-item">
                <a className="link" href="#">Отзывы</a>
              </li>
              <li className="navigation-list-item">
                <a className="link" href="#">Контакты</a>
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
