import css from "../Portfolio/Portfolio.module.css";
import imageFinder from "../../images/imageFinder.jpg";
import mimino from "../../images/mimino.jpg";
import movies from "../../images/movies.jpg";
import news from "../../images/news.jpg";
import phonebook from "../../images/phonebook.jpg";
import taskPro from "../../images/taskPro.jpg";
import test from "../../images/test.jpg";
import webstudio from "../../images/webstudio.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export default function Portfolio() {
  return (
    <section className={css.portfolio}>
      <div className="container">
        <h1 className={css.portfolioTitle}>MY WORKS</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className={css.swiper}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/goit-markup-hw-08/index.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={webstudio} alt="Webstudio" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/mimino-project-13/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={mimino} alt="Mimino restaurant" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/news-site/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={news} alt="News site" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/goit-react-hw-04-images/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={imageFinder} alt="PictureFinder" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/goit-react-hw-05-movies/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={movies} alt="Movies finder" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/goit-react-hw-08-phonebook/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={phonebook} alt="Phonebook registration" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/testGoIT/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={test} alt="Tweets application" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/taskProjectFront/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={taskPro} alt="Task Pro application" />
            </a>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  );
}
