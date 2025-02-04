import { useState, useEffect } from 'react';
import MobileMenu from '../ModileMenu/MobileMenu';
import MaxProff from '..//../assets/icon/MaxProff.svg';

import s from '../Header/Header.module.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive === true) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto ';
    };
  }, [menuActive]);

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
    </>
  );
}

export default Header;
