import css from "../About/About.module.css";
import technology270 from "../../images/technology270.jpg";
import technology354 from "../../images/technology354.jpg";
import technology450 from "../../images/technology450.jpg";

export default function About() {
  return (
    <>
      <section className={css.about}>
        <div className="container">
          <div className={css.aboutWrap}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={technology450}
                sizes="450px"
              />
              <source
                media="min-width: 768px)"
                srcSet={technology354}
                sizes="354px"
              />
              <source
                media="(min-width: 1440px)"
                srcSet={technology270}
                sizes="270px"
              />
              <img src={technology270} alt="MyPhoto" />
            </picture>
            <div className={css.aboutWrapBox}>
              <h1 className={css.aboutWrapBoxTitle}>Alexey Potapenko</h1>
              <p className={css.aboutWrapBoxItem}>
                Junior Full Stack developer, interested in both front-end and
                back-end development, software development. The main feature is
                the desire to improve skills and grow in the field of
                development. My goal is to gain more experience, work on more
                complex projects and keep learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
