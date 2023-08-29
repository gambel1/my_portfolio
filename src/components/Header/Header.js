import sprite from '../../images/sprite.svg'
import { Link, NavLink } from "react-router-dom";
import css from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerWrap}>
          <Link to={"/"} className={css.headerLink}>
            PORTFOLIO
          </Link>
          <button className={css.headerButton} type="button">
            <svg width='30' height='30'>
              <use href={sprite + "#icon-hamburger-menu"}></use>
            </svg>
          </button>
          <nav className={css.nav}>
            <ul className={css.navList}>
              <li>
                <NavLink className={css.navListItem} to={"/"}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink className={css.navListItem} to={"/about"}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink className={css.navListItem} to={"/portfolio"}>
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink className={css.navListItem} to={"/contact"}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
