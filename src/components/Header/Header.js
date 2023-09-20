import css from "../Header/Header.module.css";
import sprite from "../../images/sprite.svg";
import { navLinks } from "../NavMenu";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navBar = () => {
    return (
      <nav className={css.nav}>
        <ul className={css.navList}>
          {navLinks.map(({ href, text }) => (
            <li key={href}>
              <NavLink className={css.navListItem} to={href}>
                {text}
              </NavLink>
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
          <Link to={"/"} className={css.headerLink}>
            PORTFOLIO
          </Link>
          <button className={css.headerButton} type="button">
            <svg width="30" height="30">
              <use href={sprite + "#icon-hamburger-menu"}></use>
            </svg>
          </button>
          {navBar()}
          {/* <nav className={css.nav}>
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
          </nav> */}
        </div>
      </div>
    </header>
  );
}
