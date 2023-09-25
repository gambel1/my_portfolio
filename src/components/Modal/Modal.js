import css from '../../components/Modal/Modal.module.css';
import sprite from '../../images/sprite.svg';
// import { createPortal } from 'react-dom';

// const modalRoot = document.querySelector('#modal-root');

export default function Modal({ active, setActive }) {
  const handleClickModal = () => {
    setActive(false);
  };

  return (
    <div className="container">
      <div className={active ? css.modalActive : css.backdrop}>
        <div className={css.modal}>
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
        </div>
      </div>
    </div>
    // modalRoot
  );
}
