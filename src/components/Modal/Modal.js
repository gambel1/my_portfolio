import css from '../../components/Modal/Modal.module.css';
import Contacts from 'components/Contacts/Contacts';
import sprite from '../../images/sprite.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ setActive }) {
  const handleClickModal = () => {
    setActive(false);
  };

  return createPortal(
    <div className="container">
      <div className={css.backdrop} onClick={handleClickModal}>
        <div className={css.modal} onClick={e => e.stopPropagation()}>
          <button
            onClick={handleClickModal}
            className={css.modalButton}
            type="button"
          >
            <svg width="40px" height="40px">
              <use href={sprite + '#icon-close'}></use>
            </svg>
          </button>
          <h2>Modal</h2>
          <Contacts />
          {/* <ul>
            <li className={css.listBox}>
              <h4 className={css.listSubtitle}>Location</h4>
              <p className={css.listItem}>
                <svg width="22" height="24">
                  <use href={sprite + '#icon-location'}></use>
                </svg>
                Kyiv, Ukraine
              </p>
            </li>
            <li className={css.listBox}>
              <h4 className={css.listSubtitle}>Telegram / Contact number</h4>
              <a
                className={css.listLink}
                href="tel:+380960164016"
                rel="noreferrer noopener"
              >
                <svg style={{ marginRight: '5px' }} width="12" height="17">
                  <use href={sprite + '#icon-tel'}></use>
                </svg>
                096 016 4 016
              </a>
            </li>
            <li className={css.listBox}>
              <h4 className={css.listSubtitle}>Email</h4>
              <a className={css.listLink} href="mailto:electrifyx@gmail.com">
                <svg style={{ marginRight: '5px' }} width="16" height="12">
                  <use href={sprite + '#icon-mail'}></use>
                </svg>
                electrifyx@gmail.com
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
