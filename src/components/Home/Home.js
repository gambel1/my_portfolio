import css from "../Home/Home.module.css";
import sprite from "../../images/sprite.svg";
import photo270 from "../../images/photo270.jpg";
import photo354 from "../../images/photo354.jpg";
import photo450 from "../../images/photo450.jpg";
import cv from "../../cv.pdf";

export default function Home() {
  return (
    <section className={css.home}>
      <div className="container">
        <div className={css.homeWrap}>
          <p className={css.homeWrapItem}>Full-Stack developer</p>

          <div>
            <picture>
              {/* <source srcSet={`${photo270}`} />
              <source srcSet={`${photo354}`} media="(min-width: 768px)" />
              <source srcSet={`${photo450}`} media="(min-width: 1440px)" />
              <img srcSet={`${photo450}`} alt="myPhoto" /> */}
              <source
                media="(max-width: 767px)"
                srcSet={photo450}
                sizes="450px"
              />
              <source
                media="min-width: 768px)"
                srcSet={photo354}
                sizes="354px"
              />
              <source
                media="(min-width: 1440px)"
                srcSet={photo270}
                sizes="270px"
              />
              <img src={photo270} alt="MyPhoto" />
            </picture>
          </div>
          <h1 className={css.homeWrapTitle}>Alexey Potapenko</h1>
          <p className={css.homeWrapSubtitle}>
            I am a Junior Full-Stack developer
          </p>
          <ul className={css.homeWrapList}>
            <li>
              <a
                href="https://github.com/gambel1"
                target="_blank"
                rel="noreferrer noopener"
                className={css.homeWrapLink}
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
                className={css.homeWrapLink}
              >
                <svg width="25" height="25">
                  <use href={sprite + "#icon-linkedin"}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/gambel123"
                className={css.homeWrapLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg width="25" height="25">
                  <use href={sprite + "#icon-telegram"}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                href={cv}
                download
                title="download_cv"
                className={css.homeWrapLink}
              >
                <svg width="25" height="25">
                  <use href={sprite + "#icon-cv"}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
