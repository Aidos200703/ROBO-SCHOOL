import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length === 0) {
      return;
    }
    console.log(formData);
    alert("Заявка успешно отправлена!");
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
    });
  };

  return (
    <form className="fields-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        className="field-form"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Ваш телефон"
        className="field-form"
        onChange={handleChange}
        value={formData.phoneNumber}
      />
      <input
        type="email"
        name="email"
        placeholder="Ваш email"
        className="field-form"
        onChange={handleChange}
        value={formData.email}
      />
      <button className="btn-form">Оформить заявку</button>
    </form>
  );
}
