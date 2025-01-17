import Input from 'components/UI/Input';
import s from '../Form/Form.module.css';

function Form(params) {
  return (
    <form className={s.form} method="post">
      <h3>Розрахуйте вартість ремонту</h3>
      <fieldset className="radio-set">
        <legend>Вид ремонту:</legend>
        <div>
          <Input
            type="radio"
            name="Капітальний"
            value="Капітальний"
            id="Капітальний"
          />
          <Input type="radio" name="Під ключ" value="Під ключ" id="Під ключ" />
        </div>
        <div>
          <Input
            type="radio"
            name="Капітальний"
            value="Капітальний"
            id="Капітальний"
          />
          <Input
            type="radio"
            name="Дизайнерський"
            value="Дизайнерський"
            id="Дизайнерський"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Тип вашої нерухомості:</legend>
        <Input
          className="radio"
          type="radio"
          name="Новобудова"
          value="Новобудова"
          id="Новобудова"
        />
        <Input
          className="radio"
          type="radio"
          name="Вторинне житло"
          value="Вторинне житло"
          id="Вторинне житло"
        />
      </fieldset>
      <fieldset className="radio-set">
        <legend>Количество комнат</legend>

        <Input type="radio" name="1" value="1" id="1" />
        <Input type="radio" name="2" value="2" id="2" />

        <Input type="radio" name="3" value="3" id="3" />
        <Input type="radio" name="4" value="4" id="4" />
      </fieldset>

      <div>
        <fieldset>
          <legend>Площа, м2:</legend>
          <Input
            type="range"
            id="volume"
            name="100"
            min="0"
            max="100"
            step="10"
            value="0"
          />
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
        <input type="tel" name="tel" id="tel" />
      </label>
      <div>
        <input type="reset" value="Очистити" />
        <input type="submit" value="Замовити" />
      </div>
    </form>
  );
}

export default Form;
