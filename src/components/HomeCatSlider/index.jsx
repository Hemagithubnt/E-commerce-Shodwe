import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";


export default function HomeCatSlider() {
  return (
     <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper container"
      >
        <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
         <SwiperSlide>
            <Link to="/">
            <div className="item p-3 bg-white rounded-3xl text-center flex flex-col items-center">
             <img src="Tablet-swiper-1.avif" alt="tablet" className='rounded-xl' />
                <h3 className="text-center text-[14px] mt-2 font-[500]">Tablet</h3>
               </div>
            </Link>
        </SwiperSlide>
        
      
      </Swiper>
    </>
  )
}