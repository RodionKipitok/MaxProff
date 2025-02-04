import { useState } from 'react';
import Input from 'components/UI/Input';
import s from '../Form/Form.module.css';

function Form(params) {
  const [formData, setFormData] = useState({
    repairType: '', //Виды ремонта
    propertyType: '', // Тип недвижимости
    roomCount: '', // Количество комнат
    area: 0, // Площадь
    phone: ' ', // Телефон
  });

  console.log(formData);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Отправка данных:', formData);
  };

  return (
    <form className={s.form} method="post" onSubmit={handleSubmit}>
      <h3>Розрахуйте вартість ремонту</h3>
      <fieldset className={s.radio_set}>
        <legend>Вид ремонту:</legend>

        <Input
          type="radio"
          name="repairType"
          value="Косметичний"
          id="Косметичний"
          checked={formData.repairType === 'Косметичний'}
          onChange={handleChange}
        />

        <Input
          type="radio"
          name="repairType"
          value="Капітальний"
          id="Капітальний"
          checked={formData.repairType === 'Капітальний'}
          onChange={handleChange}
        />

        <Input
          type="radio"
          name="repairType"
          value="Під ключ"
          id="Під ключ"
          checked={formData.repairType === 'Під ключ'}
          onChange={handleChange}
        />
        <Input
          type="radio"
          name="repairType"
          value="Дизайнерський"
          id="Дизайнерський"
          checked={formData.repairType === 'Дизайнерський'}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset>
        <legend>Тип вашої нерухомості:</legend>
        <Input
          type="radio"
          name="propertyType"
          value="Новобудова"
          id="Новобудова"
          checked={formData.propertyType === 'Новобудова'}
          onChange={handleChange}
        />
        <Input
          type="radio"
          name="propertyType"
          value="Вторинне житло"
          id="Вторинне житло"
          checked={formData.propertyType === 'Вторинне житло'}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="radio-set">
        <legend>Количество комнат</legend>
        {['1', '2', '3', '4'].map(room => (
          <Input
            key={room}
            type="radio"
            name="roomCount"
            value={room}
            id={`room-${room}`}
            checked={formData.roomCount === room}
            onChange={handleChange}
          />
        ))}
      </fieldset>

      <div>
        <fieldset>
          <legend>Площа, м2:</legend>
          <input
            type="range"
            id="volume"
            name="area"
            min="0"
            max="100"
            step="10"
            value={formData.area}
            onChange={handleChange}
          />

          <p>Обрана площа: {formData.area} м²</p>
        </fieldset>
      </div>
      <div>
        <div>
          <p>Термін ремонту:</p>
          <p>до 34 днів</p>
        </div>
        <div>
          <p>Скидка составит:</p>
          <p>23 765 грн</p>
        </div>
      </div>
      <label htmlFor="tel">
        Введіть номер телефону
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+38 (067) 123-45-67"
          pattern="^\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
          title="Введите телефон в формате +38 (067) 123-45-67"
          required
          onChange={handleChange}
        />
      </label>
      <div className={s.wrapper_btn_form}>
        <button className="" type="submit">
          Замовити
        </button>
        <button className={s.btn_reset} type="reset">
          Очистити
        </button>
      </div>
    </form>
  );
}

export default Form;
