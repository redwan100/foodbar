import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './slider.css'
import { Navigation } from "swiper";

const siders = [
  {
    img: "https://i.ibb.co/KhLBMR5/1.png",
    title: "Title 1 here",
    desc: "Description",
  },
  {
    img: "https://i.ibb.co/S6mysPn/2.png",
    title: "Title 2 here",
    desc: "Description",
  },
  {
    img: "https://i.ibb.co/bm7T8pr/3.png",
    title: "Title 3 here",
    desc: "Description",
  },
];
const Slider = () => {
  const slider = siders.map((slide, i) => (
    <SwiperSlide key={i}>
      <img src={slide.img} alt="" />
      <div className="desc">
        <h1>{slide.title} </h1>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="mt-8">
      <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
        {slider}
      </Swiper>
    </div>
  );
};

export default Slider;
