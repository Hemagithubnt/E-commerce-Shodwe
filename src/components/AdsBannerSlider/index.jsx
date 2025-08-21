
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/Index";

export default function AdsBannerSlider({ items }) {
  return (
    <div className="AdsBanner py-3 w-full container">
      <Swiper
        slidesPerView={items}
        spaceBetween={15}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="AddsBanner"
      >
        <SwiperSlide>
          <BannerBox img={"AddsBanner-1.jpg"} />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBox img={"AddsBanner-2.jpg"} />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBox img={"AddsBanner-3.jpg"} />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBox img={"AddsBanner-4.jpg"} />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBox img={"AddsBanner-3.jpg"} />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBox img={"AddsBanner-1.jpg"} />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBox img={"AddsBanner-1.jpg"} />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBox img={"AddsBanner-1.jpg"} />
        </SwiperSlide>


      </Swiper>
      </div>
  );
}
