import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductsItem from "../Products-Item";


export default function ProductsSlider(props){
    return(
        <section className="ProductsSlider bg-white">
            <div className="container ">
                 <Swiper
          slidesPerView={props.items}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem />
          </SwiperSlide>
          </Swiper>

             

            </div>

        </section>
    )
}