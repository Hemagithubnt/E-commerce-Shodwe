import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBoxV2 from "../BannerBoxV2/Index";

export default function AdsBannerSliderV2({ items }) {
  return (
    <div className="AdsBanner py-3 w-full container">
      <Swiper
        slidesPerView={items}
        spaceBetween={15}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="AddsBannerV2"
      >
        <SwiperSlide>
          <BannerBoxV2 info="left" title="Samsung Gear VR Camera" money="$120.00" img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" link="/" />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBoxV2  info="right" title="Marcel Dining Room Chair" money="$130.00" img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg" link="/" />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBoxV2  info="right" title="Marcel Dining Room Chair" money="$130.00" img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg" link="/"/>
        </SwiperSlide>
         <SwiperSlide>
          <BannerBoxV2  info="right" title="Marcel Dining Room Chair" money="$130.00" img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg" link="/" />
        </SwiperSlide>
         <SwiperSlide>
          <BannerBoxV2  info="right" title="Marcel Dining Room Chair" money="$130.00" img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg" link="/" />
        </SwiperSlide>
       
    </Swiper>
      </div>
  );
}
