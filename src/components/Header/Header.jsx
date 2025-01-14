import { useState } from 'react';
import MobileMenu from '../ModileMenu/MobileMenu';
import MaxProff from '..//../assets/icon/MaxProff.svg';
import s from '../Header/Header.module.css';

function Header(params) {
  const [isOpen, setIsOpen] = useState(false);
  const handelClickOnMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <>
      <div className={s.container_for_position_mobile_menu}>
        <button
          type="button"
          className={s.btn_mobile_phone}
          onClick={handelClickOnMobileMenu}
        ></button>
        <img src={MaxProff} alt="logo" className={s.logo} />
        <button type="button" className={s.btn_call}>
          <span></span>
        </button>
      </div>
      {isOpen === true ? <MobileMenu /> : ''}
      <div className={s.hero}>
        <h1>РЕМОНТ КВАРТИР У КИЄВІ</h1>
        <p>
          від <span>2345</span>грн / м2
        </p>
      </div>
    </>
  );
}

export default Header;
