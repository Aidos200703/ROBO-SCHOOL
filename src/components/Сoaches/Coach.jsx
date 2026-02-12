import { useState } from "react";
import { FiX } from "react-icons/fi";
import facebook from "../../../public/imgs/icon-social/Facebook.svg";
import instagram from "../../../public/imgs/icon-social/Instagram.svg";

export default function Coach({
  img,
  name,
  profession,
  education,
  experience,
  awards,
  facebookLink,
  instagramLink,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function modalPage() {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-top">
            <div className="coach-info">
              <img className="modal-img" src={img} alt={name} />
              <div className="coach-name-profession">
                <h4 className="modal-coach-name">{name}</h4>
                <p className="modal-coach-profession">{profession}</p>
                <div className="coach-socials">
                  <a
                    href={facebookLink}
                    className="coach-link-facebook"
                    target="_blank"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a
                    href={instagramLink}
                    className="coach-link-instagram"
                    target="_blank"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="close-modal">
              <span
                className="close-btn-text"
                onClick={() => {
                  setIsOpenModal(false);
                  document.body.classList.remove("active");
                }}
              >
                Закрыть
              </span>
              <span
                className="close-btn-icon"
                onClick={() => {
                  setIsOpenModal(false);
                  document.body.classList.remove("active");
                }}
              >
                <FiX className="icon-close" />
              </span>
            </div>
          </div>

          <div className="coach-experience">
            <select name="select" className="select-option">
              <option value="education" selected>
                Образование
              </option>
              <option value="experience">Опыт работы</option>
              <option value="awards">Награды</option>
            </select>

            <a
              href=""
              className="coach-title active"
              onClick={(e) => e.preventDefault()}
            >
              Образование
            </a>
            <a
              href="#experience"
              className="coach-title active"
              onClick={(e) => e.preventDefault()}
            >
              Опыт работы
            </a>
            <a
              href=""
              className="coach-title active"
              onClick={(e) => e.preventDefault()}
            >
              Награды
            </a>
          </div>
          <hr />
          <div className="coach-education">
            <div
              className="coach-education-info"
              dangerouslySetInnerHTML={{ __html: education }}
            ></div>
            <h3 id="experience">Курсы и тренинги</h3>
            <div
              className="coach-education-info"
              dangerouslySetInnerHTML={{ __html: experience }}
            ></div>
            <h3>Награды</h3>
            <div
              className="coach-education-info"
              dangerouslySetInnerHTML={{ __html: awards }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <img className="coach-img" src={img} alt={img} />
      <h4 className="coach-name">{name}</h4>
      <p className="coach-profession">{profession}</p>
      <button
        className="coach-btn"
        onClick={() => {
          document.body.classList.add("active");
          setIsOpenModal(!isOpenModal);
        }}
      >
        Подробнее
      </button>
      {isOpenModal ? modalPage() : null}
    </>
  );
}
