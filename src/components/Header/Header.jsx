import iconCall from "../../../public/imgs/button-icons/call.svg";
import iconMenu from "../../../public/imgs/button-icons/menu.svg";
import iconCancel from "../../../public/imgs/button-icons/cancel.svg";
import welcomePageImg from "../../../public/imgs/welcome-page-img.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [isOpen]);

  return (
    <div className="welcome-page">
      <header>
        <div className="logo">
          <h2>
            <a href="#">ROBO.SCHOOL</a>
          </h2>
        </div>
        <div className="btn-active">
          <a href="tel:+78000001122">
            <img className="btn-call" src={iconCall} alt="iconCall" />
          </a>
          <img
            className="btn-menu"
            id="btn-menu"
            src={iconMenu}
            alt="iconCall"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className={`menu ${isOpen ? "active" : ""}`} id="menu">
          <nav className="list-for-mobile">
            <div className={`btn-cancel ${isOpen ? "active" : ""}`}>
              <img
                className="cancel"
                id="cancel"
                src={iconCancel}
                alt="iconMenu"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <ul>
              <li className="link">
                <a href="#">Тренеры</a>
              </li>
              <li className="link">
                <a href="#">О школе</a>
              </li>
              <li className="link">
                <a href="#">Стоимость</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="list">
          <ul>
            <li className="link">
              <a href="#">Тренеры</a>
            </li>
            <li className="link">
              <a href="#">О школе</a>
            </li>
            <li className="link">
              <a href="#">Стоимость</a>
            </li>
          </ul>
        </nav>

        <div className="phone-number">
          <a href="tel:+7 800 000 11 22">+7 800 000 11 22</a>
        </div>
      </header>
      <div className="main-banner">
        <div className="hero-text">
          <h1 className="title-hero">ROBO SCHOOL</h1>
          <p className="subtitle-hero">
            Курсы повышения квалификации по робототехнике для педагогов
            начальной школы
          </p>
          <a href="#" className="button-to-sign-up">
            Записаться на курс
          </a>
        </div>
        <div className="hero-img">
          <img src={welcomePageImg} alt="welcome-page-img" />
        </div>
      </div>
    </div>
  );
}
