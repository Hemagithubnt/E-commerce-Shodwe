import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function HomeCatSlider() {
  return (
    <div className="homeCatSlider py-8 pt-4">
      <div className="container">
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Features HomeCatSlider.png"
                alt="dress"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                Fashion
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="electronics.png"
                alt="electronics"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                electronics
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="bags img.png"
                alt="bags"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                Bags
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Footwear.png"
                alt="Footwear"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
             Footwear
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Groceries.png"
                alt="Groceries"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
               Groceries
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Beauty img.png"
                alt="Beauty"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
               Beauty
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="wellness.png"
                alt="wellness"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                wellness
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="jewellery.png"
                alt="jewellery"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                jewellery
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Features HomeCatSlider.png"
                alt="tablet"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                Tablet
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Features HomeCatSlider.png"
                alt="tablet"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                Tablet
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Features HomeCatSlider.png"
                alt="tablet"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                Tablet
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Features HomeCatSlider.png"
                alt="tablet"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                Tablet
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Features HomeCatSlider.png"
                alt="tablet"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                Tablet
              </h3>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link to="/">
            <div className="item p-3 bg-white text-center flex flex-col items-center">
              <img
                src="Features HomeCatSlider.png"
                alt="tablet"
                className="w-[60px] transition-all "
              />
              <h3 className="text-center text-[14px] mt-3 font-[500]">
                Tablet
              </h3>
            </div>
          </Link>
        </SwiperSlide>
       
      </Swiper>
      </div>
    </div>
  );
}
