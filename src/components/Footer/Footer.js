import css from "../Header/Header.module.css";
import styles from "../Footer/Footer.module.css";
import { navLinks } from "../NavMenu";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Footer() {
  const navBar = () => {
    return (
      <nav className={(css.nav, styles.footerNav)}>
        <ul className={css.navList}>
          {navLinks.map(({ href, text }) => (
            <li key={href}>
              <NavLink
                className={classNames(
                  css.navListItem,
                  styles.navListItemCurrent
                )}
                to={href}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {navBar()}
        {/* <nav className={(css.nav, styles.footerNav)}>
          <ul className={css.navList}>
            <li>
              <NavLink
                className={classNames(
                  css.navListItem,
                  styles.navListItemCurrent
                )}
                to={"/"}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classNames(
                  css.navListItem,
                  styles.navListItemCurrent
                )}
                to={"/about"}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classNames(
                  css.navListItem,
                  styles.navListItemCurrent
                )}
                to={"/portfolio"}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classNames(
                  css.navListItem,
                  styles.navListItemCurrent
                )}
                to={"/contact"}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav> */}

        <h2 className={styles.footerTitle}>PORTFOLIO</h2>
        <p className={styles.footerSubtitle}>
          Copyright by Alexey Potapenko 2023
        </p>
      </div>
    </footer>
  );
}
