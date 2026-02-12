import Irina from "../../../public/imgs/coaches/Irina.png";
import Marina from "../../../public/imgs/coaches/Marina.png";
import Maksim from "../../../public/imgs/coaches/Maksim.png";
import Konstantin from "../../../public/imgs/coaches/Konstantin.png";
import Liza from "../../../public/imgs/coaches/Liza.png";
import Coach from "./Coach";

export default function ListCoaches() {
  const coaches = [
    {
      id: 1,
      img: Irina,
      facebookLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      instagramLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      name: "Ирина Лайм",
      profession: "преподаватель по робототехнике",
      education:
        "<p>Сентябрь 1995 — Июнь 2000 <br /> Санкт-Петербургский политехнический университет Петра Великого<br />Факультет: Компьютерных наук и технологий<br/> Специальность: Математика и компьютерные науки<br /> Форма обучения: Очная</p>",
      experience:
        "<p>Июль 2020 — настоящее время<br />Junior Software Developer / IT-специалист<br />Разработка и поддержка веб-приложений<br/ >Работа с HTML, CSS, JavaScript<br/>Участие в проектировании логики приложения<br/>Исправление багов и оптимизация существующего кода<br/>Взаимодействие с командой (дизайнеры, backend-разработчики)<br/>Работа с Git (branch, commit, merge)</p>",
      awards:
        "<p>Участие в учебных и практических <br />IT-проектахУспешное завершение курсов дополнительного образования<br />Сертификаты о прохождении профильных тренингов<br />Благодарственные письма / внутренние поощрения (при наличии)</p>",
    },
    {
      id: 2,
      img: Marina,
      facebookLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      instagramLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      name: "Марина Орлова",
      profession: "преподаватель по робототехнике",
      education:
        "<p>Сентябрь 1995 — Июнь 2000 <br /> Санкт-Петербургский политехнический университет Петра Великого<br />Факультет: Компьютерных наук и технологий<br/> Специальность: Математика и компьютерные науки<br /> Форма обучения: Очная</p>",
      experience:
        "<p>Июль 2020 — настоящее время<br />Junior Software Developer / IT-специалист<br />Разработка и поддержка веб-приложений<br/ >Работа с HTML, CSS, JavaScript<br/>Участие в проектировании логики приложения<br/>Исправление багов и оптимизация существующего кода<br/>Взаимодействие с командой (дизайнеры, backend-разработчики)<br/>Работа с Git (branch, commit, merge)</p>",
      awards:
        "<p>Участие в учебных и практических <br />IT-проектахУспешное завершение курсов дополнительного образования<br />Сертификаты о прохождении профильных тренингов<br />Благодарственные письма / внутренние поощрения (при наличии)</p>",
    },
    {
      id: 3,
      img: Maksim,
      facebookLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      instagramLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      name: "Максим Петров",
      profession: "преподаватель по программированию",
      education:
        "<p>Сентябрь 1995 — Июнь 2000 <br /> Санкт-Петербургский политехнический университет Петра Великого<br />Факультет: Компьютерных наук и технологий<br/> Специальность: Математика и компьютерные науки<br /> Форма обучения: Очная</p>",
      experience:
        "<p>Июль 2020 — настоящее время<br />Junior Software Developer / IT-специалист<br />Разработка и поддержка веб-приложений<br/ >Работа с HTML, CSS, JavaScript<br/>Участие в проектировании логики приложения<br/>Исправление багов и оптимизация существующего кода<br/>Взаимодействие с командой (дизайнеры, backend-разработчики)<br/>Работа с Git (branch, commit, merge)</p>",
      awards:
        "<p>Участие в учебных и практических <br />IT-проектахУспешное завершение курсов дополнительного образования<br />Сертификаты о прохождении профильных тренингов<br />Благодарственные письма / внутренние поощрения (при наличии)</p>",
    },
    {
      id: 4,
      img: Konstantin,
      facebookLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      instagramLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      name: "Константин Назаров",
      profession: "преподаватель по робототехнике",
      education:
        "<p>Сентябрь 1995 — Июнь 2000 <br /> Санкт-Петербургский политехнический университет Петра Великого<br />Факультет: Компьютерных наук и технологий<br/> Специальность: Математика и компьютерные науки<br /> Форма обучения: Очная</p>",
      experience:
        "<p>Июль 2020 — настоящее время<br />Junior Software Developer / IT-специалист<br />Разработка и поддержка веб-приложений<br/ >Работа с HTML, CSS, JavaScript<br/>Участие в проектировании логики приложения<br/>Исправление багов и оптимизация существующего кода<br/>Взаимодействие с командой (дизайнеры, backend-разработчики)<br/>Работа с Git (branch, commit, merge)</p>",
      awards:
        "<p>Участие в учебных и практических <br />IT-проектахУспешное завершение курсов дополнительного образования<br />Сертификаты о прохождении профильных тренингов<br />Благодарственные письма / внутренние поощрения (при наличии)</p>",
    },
    {
      id: 5,
      img: Liza,
      facebookLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      instagramLink:
        "https://www.instagram.com/seitjapp.aro.ff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      name: "Лиза Весенняя",
      profession: "преподаватель по программированию",
      education:
        "<p>Сентябрь 1995 — Июнь 2000 <br /> Санкт-Петербургский политехнический университет Петра Великого<br />Факультет: Компьютерных наук и технологий<br/> Специальность: Математика и компьютерные науки<br /> Форма обучения: Очная</p>",
      experience:
        "<p>Июль 2020 — настоящее время<br />Junior Software Developer / IT-специалист<br />Разработка и поддержка веб-приложений<br/ >Работа с HTML, CSS, JavaScript<br/>Участие в проектировании логики приложения<br/>Исправление багов и оптимизация существующего кода<br/>Взаимодействие с командой (дизайнеры, backend-разработчики)<br/>Работа с Git (branch, commit, merge)</p>",
      awards:
        "<p>Участие в учебных и практических <br />IT-проектахУспешное завершение курсов дополнительного образования<br />Сертификаты о прохождении профильных тренингов<br />Благодарственные письма / внутренние поощрения (при наличии)</p>",
    },
  ];
  return (
    <div>
      <ul className="coaches-list" id="coaches-list">
        {coaches.map((coach) => {
          return (
            <li className="coaches-item" key={coach.id}>
              <Coach
                id={coach.id}
                img={coach.img}
                name={coach.name}
                profession={coach.profession}
                education={coach.education}
                experience={coach.experience}
                awards={coach.awards}
                facebookLink={coach.facebookLink}
                instagramLink={coach.instagramLink}
              />
            </li>
          );
        })}
        {/* <div className="btn-left-right">
          <img src={btnLeft} alt="btnLeft" />
          <img src={btnRight} alt="btnRight" />
        </div> */}
      </ul>
    </div>
  );
}
