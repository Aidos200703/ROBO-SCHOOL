import Form from "./Form";

export default function Forms() {
  return (
    <section className="forms">
      <div className="form-container">
        <div className="title-forms">
          <h2>Запишитесь на курс со скидкой 10%</h2>
          <p>Акция действительна до 10 марта 2022 года</p>
        </div>
        <Form />
      </div>
    </section>
  );
}
