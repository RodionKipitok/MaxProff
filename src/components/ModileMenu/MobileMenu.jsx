import { ReactComponent as Call } from '..//../assets/icon/call.svg';
import s from './MobileMenu.module.css';
import React from 'react';

function MobileMenu(params) {
  return (
    <>
      <div className={s.container_mobile_menu}>
        <div className={s.blur}>
          <button type="button" className={s.btn_close}>
            <span></span>
          </button>
        </div>
        <div className={s.mobile_menu_content}>
          <a href="http://" className={s.link_call_mobile_menu}>
            Замовити дзвінок
          </a>
          <a href="http://" className={s.link_count_repair}>
            Калькулятор ремонту
          </a>
          <div className={s.repair_categories}>
            <button type="button">Ремонт квартир</button>
            <button type="button">Дизайн інтер'єру</button>
            <button type="button">Ремонт кімнат</button>
            <button type="button">Будинки та котеджі</button>
            <button type="button">Інші послуги</button>
          </div>
          <div className={s.info}>
            <a href="http://">Ціни</a>
            <a href="http://">Портфоліо</a>
            <a href="http://">Акції</a>
            <a href="http://">Переваги</a>
            <a href="http://">Блог</a>
            <a href="http://">Контакти</a>
          </div>
          <div className={s.contact}>
            <Call className={s.call} />
            <a href="tel:+"> +3809355656</a>
            <p>08:00 - 22:00, без вихідних</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
