export default function AboutCourse() {
  return (
    <section className="about-course">
      <div className="about-text">
        <p>
          <span className="name-course">Robo School</span> – учреждение для
          формирования кадрового педагогического резерва в сфере робототехники и
          программирования
        </p>
      </div>
      <div className="stats">
        <ul className="stats-list">
          <li className="stats-item">
            <span className="stats-number">10</span>
            <p className="stats-text">
              УМК по различным направлениям по робототехнике
            </p>
          </li>
          <li className="stats-item">
            <span className="stats-number">20</span>
            <p className="stats-text">Школ, в которых запущена робототехника</p>
          </li>
          <li className="stats-item">
            <span className="stats-number">100</span>
            <p className="stats-text">
              Педагогов прошедших курсы повышения квалификации
            </p>
          </li>
          <li className="stats-item">
            <span className="stats-number">10000</span>
            <p className="stats-text">
              Обученных детей на базе собственных центров
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
