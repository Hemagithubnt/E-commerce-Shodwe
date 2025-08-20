// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation,Autoplay } from "swiper/modules";

function HomeSlider() {
  return (
    <div className="homeSlider p-3">
      <div className="container ">
        <Swiper
          navigation={true}
           loop={true}
          modules={[Navigation,Autoplay]}
          className="sliderHome rounded-3xl"
          spaceBetween={10}
           autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        >
          <SwiperSlide>
            <img src="banner-1.1.jpg" alt="first" className="rounded-3xl " />
          </SwiperSlide>
           <SwiperSlide>
            <img src="banner-3.jpg" alt="seco" className="rounded-3xl " />
          </SwiperSlide>
          <SwiperSlide>
            <img src="banner-4.jpg" alt="seco" className="rounded-3xl " />
          </SwiperSlide>
          <SwiperSlide>
            <img src="banner-5.jpg" alt="third" className="rounded-3xl " />
          </SwiperSlide>
          <SwiperSlide>
            <img src="banner-1.jpg" alt="four" className="rounded-3xl " />
          </SwiperSlide>
          <SwiperSlide>
            <img src="banner-2.jpg" alt="five" className="rounded-3xl " />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
