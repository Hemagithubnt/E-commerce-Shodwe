import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

export default function ProductZoom() {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();
   
  const goto =(index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);     
    }


  return (
    <>
      <div className="flex gap-3 items-start h-[380px]">
        <div className="slider w-[15%] h-[57%] overflow-hidden">
          <Swiper
            direction={"vertical"}
            ref={zoomSliderSml}
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="ProductZoomSwiperSlider h-full"
          >
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex===0 ? 'opacity-30' : 'opacity-80'}`} onClick={() => goto(0)}>
                <img 
                  src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
                  className="w-full transition-all hover:scale-105"
                />
              </div>
            </SwiperSlide>
           <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex===1 ? 'opacity-30' : 'opacity-80'}`} onClick={() => goto(1)}>
                <img 
                  src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                  className="w-full transition-all hover:scale-105"
                />
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex===2 ? 'opacity-30' : 'opacity-80'}`} onClick={() => goto(2)}>
                <img 
                  src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
                  className="w-full transition-all hover:scale-105"
                />
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex===3 ? 'opacity-30' : 'opacity-80'}`} onClick={() => goto(3)}>
                <img 
                  src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
                  className="w-full transition-all hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        

<div className="zoomContainer w-[85%] flex h-full items-center justify-center overflow-hidden rounded-md">
           <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}                                                                                                                                                                                                                                                                            
            navigation={false}
            className="h-full"
          >
         <SwiperSlide>
             <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://api.spicezgold.com/download/file_1734529362999_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp"
              className="w-full h-full object-contain  rounded-xl"
                />
         </SwiperSlide>
          <SwiperSlide>
             <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
              className="w-full h-full object-contain  rounded-xl"
                />
         </SwiperSlide>
         <SwiperSlide>
             <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
              className="w-full h-full object-contain  rounded-xl"
                />
         </SwiperSlide>
           <SwiperSlide>
             <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://api.spicezgold.com/download/file_1734529363005_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg"
              className="w-full h-full object-contain  rounded-xl"
                />
         </SwiperSlide>

          </Swiper>
         
           
          </div>
        </div>
   
    </>
  );
}
