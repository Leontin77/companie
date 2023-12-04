import { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import LogoIcon from "../../images/logo.png";
import BurgerIcon from "../../images/burger.png";

export const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    if (screenWidth < 1024) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

  }, [screenWidth]);

  const burgerClick = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <header className="header">
      <div className="container">
        <img className="header-logo" src={LogoIcon} alt="logo" />
        <nav className="navigation">
          {isOpen &&
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
          }
            <img className="burger-icon" onClick={burgerClick} src={BurgerIcon} alt="menu" />
        </nav>
      </div>
    </header>
  );
};
