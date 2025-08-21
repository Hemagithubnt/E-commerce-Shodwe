// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";

export default function HomeSliderV2() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop="true"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
      className="HomeSliderV2"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
          <div
            className="info absolute top-0 -right-[100%] transition-all opacity-0 duration-700 w-[50%] h-[100%] z-50 p-8 flex 
               items-center flex-col justify-center"
          >
            <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative 
            -right-[100%] opacity-0 ">Big Saving Days Sale</h4>
            <h2 className="text-[35px] font-[700] relative 
            -right-[100%] opacity-0">
              Women Solid Round Green T-Shirt
            </h2>
            <h3 className=" flex items-center gap-3 text-[20px] font-[500] w-full text-left mb-3 mt-3 relative 
            -right-[100%] opacity-0"
            >Starting At Only<span className="text-red-500 text-[30px] font-[700]">$59.00</span></h3>
            <div className="w-full btn_ relative 
            -bottom-[100%] opacity-0 ">
            <Button className="btn">SHOP NOW</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
           <div
            className="info absolute top-0 -right-[100%] transition-all opacity-0 duration-700 w-[50%] h-[100%] z-50 p-8 flex 
               items-center flex-col justify-center"
          >
            <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative 
            -right-[100%] opacity-0">Big Saving Days Sale</h4>
            <h2 className="text-[35px] font-[700] relative 
            -right-[100%] opacity-0">
             Buy Modern Chair In Black Color
            </h2>
            <h3 className=" flex items-center gap-3 text-[20px] font-[500] w-full text-left mb-3 mt-3 relative 
            -right-[100%] opacity-0"
            >Starting At Only<span className="text-red-500 text-[30px] font-[700]">$99.00</span></h3>
            <div className="w-full btn_ relative 
            -bottom-[100%] opacity-0 ">
            <Button className="btn text-left">SHOP NOW</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
