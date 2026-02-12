import ListCoaches from "./ListСoaches";

export default function Coaches() {
  return (
    <section className="coaches">
      <div className="coaches-container">
        <h2 className="coaches-title">Профессиональные тренеры</h2>
        <ListCoaches />
      </div>
    </section>
  );
}
