import { useState } from 'react';
import MobileMenu from '../ModileMenu/MobileMenu';
import MaxProff from '..//../assets/icon/MaxProff.svg';
import s from '../Header/Header.module.css';

function Header() {
  const [menuActive, setMenuActive ] = useState(false);
 

 

  return (
    <>
      <div className={s.container_for_position_mobile_menu}>
        <button
          type="button"
          className={s.btn_mobile_phone}
          onClick={() => {setMenuActive(true)}}
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
      </div>
    </>
  );
}

export default Header;
