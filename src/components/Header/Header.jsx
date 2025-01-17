import { useState } from 'react';
import Form from 'components/Form/From';
import MobileMenu from '../ModileMenu/MobileMenu';
import MaxProff from '..//../assets/icon/MaxProff.svg';
import img1 from '..//../assets/img/Group 73.png';
import img2 from '..//../assets/img/Group 74.png';
import img3 from '..//../assets/img/Group 76.png';
import img4 from '..//../assets/img/Group72.png';
import s from '../Header/Header.module.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const advantages = [
    { img: img1, text: 'Вимір та складання кошторису БЕЗКОШТОВНО' },
    { img: img2, text: 'Виїзд кошторисника' },
    { img: img3, text: 'Гарантія 3 роки' },
    { img: img4, text: 'Оплата за фактом приймання робіт' },
  ];


  return (
    <>
      <div className={s.container_for_position_mobile_menu}>
        <button
          type="button"
          className={s.btn_mobile_phone}
          onClick={() => {
            setMenuActive(true);
          }}
        ></button>
        <img src={MaxProff} alt="logo" className={s.logo} />
        <button type="button" className={s.btn_call}>
          <span></span>
        </button>
      </div>
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className={s.hero}>
        <h1 className={s.heroTitle}>РЕМОНТ КВАРТИР У КИЄВІ</h1>
        <p className={s.heroSubtitle}>
          від <span className={s.heroPrice}>2345</span>грн / м2
        </p>
        <div className={s.advantageWrapper}>
          {advantages.map(item => (
            <div className={s.advantageItem} key={item.text}>
              <img src={item.img} alt={item.text} className={s.advantageIcon} />
              <p className={s.advantageText} >{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Form/>
    </>
  );
}

export default Header;
