import css from '../Header/Header.module.css';
import Modal from 'components/Modal/Modal';
import sprite from '../../images/sprite.svg';
import { navLinks } from '../NavMenu';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Header({ click }) {
  const [modalActive, setModalActive] = useState(false);

  const handleClickBurger = () => {
    setModalActive(true);
  };

  const navBar = () => {
    return (
      <nav className={css.nav}>
        <ul className={css.navList}>
          {navLinks.map(({ link, text }) => (
            <li key={link}>
              <a href={link} onClick={click} className={css.navListItem}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerWrap}>
          <a href="/#" className={css.headerLink}>
            PORTFOLIO
          </a>
          <button
            onClick={handleClickBurger}
            className={css.headerButton}
            type="button"
          >
            <svg width="30" height="30">
              <use href={sprite + '#icon-hamburger-menu'}></use>
            </svg>
          </button>
          {navBar()}
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </header>
  );
}

Header.propTypes = {
  click: PropTypes.func,
};
