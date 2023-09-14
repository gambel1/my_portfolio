import css from "../Portfolio/Portfolio.module.css";
import imageFinder from '../../images/imageFinder.jpg'
import mimino from '../../images/mimino.jpg'
import movies from '../../images/movies.jpg'
import news from '../../images/news.jpg'
import phonebook from '../../images/phonebook.jpg'
import taskPro from '../../images/taskPro.jpg'
import test from '../../images/test.jpg'
import webstudio from '../../images/webstudio.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Portfolio() {
  return (
    <section className={css.portfolio}>
      <div className="container">
        <h1 className={css.portfolioTitle}>MY WORKS</h1>
        <Swiper
          className={css.swiper}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <a href="https://gambel1.github.io/goit-markup-hw-08/index.html">
              <img src={webstudio} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://gambel1.github.io/mimino-project-13/">
              <img src={mimino} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://gambel1.github.io/news-site/">
              <img src={news} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://gambel1.github.io/goit-react-hw-04-images/">
              <img src={imageFinder} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://gambel1.github.io/goit-react-hw-05-movies/">
              <img src={movies} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://gambel1.github.io/goit-react-hw-08-phonebook/">
              <img src={phonebook} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://gambel1.github.io/testGoIT/">
              <img src={test} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://gambel1.github.io/taskProjectFront/">
              <img src={taskPro} alt="" />
            </a>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  );
}
