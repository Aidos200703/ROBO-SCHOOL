export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2 className="benefits-title">Что вы получите после курса</h2>
        <ul className="benefits-list">
          <li className="benefits-item">
            <h4>Удостоверение</h4>
            <p>
              Дающее право преподавать робототехнику для детей 6-12 лет в
              образовательных учреждениях
            </p>
          </li>
          <li className="benefits-item">
            <h4>Знания</h4>
            <p>
              По основам разработки учебно-методических комплексов по
              робототехнике и программированию
            </p>
          </li>
          <li className="benefits-item">
            <h4 className="benefits-title">
              Практику
              <span className="tooltip">
                <img
                  className="icon-notification"
                  src="imgs/button-icons/icon(i).svg"
                  alt="info"
                />
                <span className="tooltip-text">При наличии свободных мест</span>
              </span>
            </h4>

            <p>
              Возможность пройти практику по преподаванию робототехники на базе
              R:ED LAB (в оффлайн или онлайн формате)
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
