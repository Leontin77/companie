import { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import  LogoIcon  from '../../images/logo.svg';
import BurgerIcon from "../../images/burger.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (document.location.href.includes('thankyou')){
      if (localStorage.getItem('pixID')) {
        navigate(`/thankyou?pid=${localStorage.getItem('pixID')}`);

      } else {
        navigate(`/thankyou`);
      }
    }
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
    if (screenWidth < 1024) {
    setIsOpen((prev) => !prev);
    }
  };
  const close = () => {
    if (screenWidth < 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
    if (screenWidth < 1024) {
      if (isOpen && !document.querySelector('.navigation').contains(event.target)) {
        setIsOpen(false);
      }
    };
  }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    
  }, [isOpen]);


  return (
    <header className="header">
      <div className="container">
        {/*<img*/}
        {/*  // className="header-logo"*/}
        {/*  src="../../images/logo.svg"*/}
        {/*  alt="logo"*/}
        {/*  onClick={() => navigate("/")}*/}
        {/*/>*/}
        {/*<LogoIcon />*/}
        <div  onClick={() => navigate("/")} className="header-logo"></div>
        <nav className="navigation">
          {isOpen && (
            <ul className="navigation-list">
              <li onClick={close} className="navigation-list-item">
                <Link className="link" to="/">
                  Главная
                </Link>
              </li>
              <li onClick={close} className="navigation-list-item">
                <Link className="link" to="/about">
                  Чем занимается FRA?
                </Link>
              </li>
              <li onClick={close} className="navigation-list-item">
                <Link className="link" to="/calculator">
                  Калькулятор
                </Link>
              </li>
              <li onClick={close} className="navigation-list-item">
                <Link className="link" to="/blacklist">
                  Черный список
                </Link>
              </li>
              <li onClick={close} className="navigation-list-item">
                <Link className="link" to="/review">
                  Отзывы
                </Link>
              </li>
              <li onClick={close} className="navigation-list-item">
                <Link className="link" to="/contact">
                  Контакты
                </Link>
              </li>
            </ul>
          )}
          <img
            className="burger-icon"
            onClick={burgerClick}
            src={BurgerIcon}
            alt="menu"
          />
        </nav>
      </div>
    </header>
  );
};
