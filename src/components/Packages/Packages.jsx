import Package from "./Package";
export default function Packages() {
  const packages = [
    {
      id: 1,
      name: "- PRO -",
      description: "УМК по робототетхнике и программированию",
      price: "20.000 ₽",
      btnToBuyLink: "https://www.tinkoff.ru/cf/1a2b3c4d5e6f7g8h9i0j",
    },
    {
      id: 2,
      name: "- ROBO -",
      description: "УМК по робототетхнике ",
      price: "15.000 ₽",
      btnToBuyLink: "https://www.tinkoff.ru/cf/1a2b3c4d5e6f7g8h9i0j",
    },
    {
      id: 3,
      name: "- PROG -",
      description: "УМК по программированию",
      price: "10.000 ₽",
      btnToBuyLink: "https://www.tinkoff.ru/cf/1a2b3c4d5e6f7g8h9i0j",
    },
  ];

  return (
    <section className="packages">
      <div className="packages-container">
        <h2 className="packages-title">Выберите нужный пакет</h2>
        <ul className="packages-list">
          {packages.map((item) => {
            return (
              <li className="packages-item" key={item.id}>
                <Package
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  btnToBuyLink={item.btnToBuyLink}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
