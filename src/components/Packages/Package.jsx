export default function Package({ name, description, price, btnToBuyLink }) {
  return (
    <div className="package">
      <h2 className="package-name">{name}</h2>
      <p className="package-price">{price}</p>
      <p className="package-description">{description}</p>
      <a href={btnToBuyLink} className="package-btn" target="_blank">
        Оставить заявку
      </a>
    </div>
  );
}
