import styles from "../Footer/Footer.module.css"
import css from '../Header/Header.module.css'
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
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
    </footer>
  );
}
