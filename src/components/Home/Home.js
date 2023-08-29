import css from '../Home/Home.module.css'
import sprite from "../../images/sprite.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <div className="container"> */}
      <div className={css.home}>
        <h1 className={css.homeTitle}>Alexey Potapenko</h1>
        <p className={css.homeSubtitle}>I am a Junior Full-Stack developer</p>
        <ul className={css.homeList}>
          <li>
            <Link className={css.homeLink}>
              <svg className={css.homeImageCurrent} width="25" height="25">
                <use href={sprite + "#icon-github"}></use>
              </svg>
            </Link>
          </li>
          <li>
            <Link className={css.homeLink}>
              <svg className={css.homeImage} width="30" height="30">
                <use href={sprite + "#icon-linkedin"}></use>
              </svg>
            </Link>
          </li>
          <li>
            <Link className={css.homeLink}>
              <svg className={css.homeImage} width="30" height="30">
                <use href={sprite + "#icon-telegram"}></use>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </>
  );
}
