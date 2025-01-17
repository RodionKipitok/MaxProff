import s from './MobileMenu.module.css';

function MobileMenu({ menuActive, setMenuActive }) {
  const linkscCategories = [
    { name: 'Ремонт квартир', href: 'http://' },
    { name: "Дизайн інтер'єру", href: 'http://' },
    { name: 'Ремонт кімнат', href: 'http://' },
    { name: 'Будинки та котеджі', href: 'http://' },
    { name: 'Інші послуги', href: 'http://' },
  ];

  const linksInfo = [
    { name: 'Ціни', href: 'http://' },
    { name: 'Портфоліо', href: 'http://' },
    { name: 'Акції', href: 'http://' },
    { name: 'Переваги', href: 'http://' },
    { name: 'Блог', href: 'http://' },
    { name: 'Контакти', href: 'http://' },
  ];

  return (
    <>
      <div
        className={`${s.container_mobile_menu} ${menuActive ? s.active : ''}`}
      >
        <div className={s.blur}>
          <button
            type="button"
            className={s.btn_close}
            onClick={() => {
              setMenuActive(false);
            }}
          >
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
            {linkscCategories.map(item => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
          <div className={s.info}>
            {linksInfo.map(item => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
          <div className={s.contact}>
            <a href="tel:+"> +3809355656</a>
            <p>08:00 - 22:00, без вихідних</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
