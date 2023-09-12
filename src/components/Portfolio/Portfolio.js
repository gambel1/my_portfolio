import photo450 from "../../images/photo450.jpg";
import technology450 from "../../images/technology450.jpg";
import backgraund from "../../images/backgraundLinkedin.png";
import myPhoto from "../../images/myPhoto.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import css from "../Portfolio/Portfolio.module.css";
import "swiper/css";

export default function Portfolio() {
  return (
    <Swiper
      className={css.swiper}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>
        <a href={photo450}>Slide 1</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href={technology450}>Slide 2</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href={backgraund}>Slide 3</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href={myPhoto}>Slide 4</a>
      </SwiperSlide> */}
      <SwiperSlide>
        <a href="https://gambel1.github.io/goit-react-hw-08-phonebook/">
          <img src={photo450} alt='one'/>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://gambel1.github.io/goit-react-hw-02-feedback/">
          <img src={technology450} alt='two'/>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://gambel1.github.io/goit-react-hw-03-image-finder/">
          <img src={backgraund} alt='three'/>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://gambel1.github.io/goit-react-hw-03-image-finder/">
          <img src={myPhoto} alt='hour'/>
        </a>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
