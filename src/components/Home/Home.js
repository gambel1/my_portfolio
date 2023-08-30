import css from "../Home/Home.module.css";
import sprite from "../../images/sprite.svg";
import cv from '../../cv.pdf'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <div className="container"> */}
      <div className={css.home}>
        <div>
          <picture></picture>
        </div>
        <h1 className={css.homeTitle}>Alexey Potapenko</h1>
        <p className={css.homeSubtitle}>I am a Junior Full-Stack developer</p>
        <ul className={css.homeList}>
          <li>
            <a
              href="https://github.com/gambel1"
              target="_blank"
              rel="noreferrer noopener"
              className={css.homeLink}
            >
              <svg width="25" height="25">
                <use href={sprite + "#icon-github"}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alexpotapenko/"
              target="_blank"
              rel="noreferrer noopener"
              className={css.homeLink}
            >
              <svg width="25" height="25">
                <use href={sprite + "#icon-linkedin"}></use>
              </svg>
            </a>
          </li>
          <li>
            <Link className={css.homeLink}>
              <svg width="25" height="25">
                <use href={sprite + "#icon-telegram"}></use>
              </svg>
            </Link>
          </li>
          <li>
            <a href={cv} download title="download_cv" className={css.homeLink}>
              <svg width="25" height="25">
                <use href={sprite + "#icon-cv"}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </>
  );
}
