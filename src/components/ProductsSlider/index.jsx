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
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductsItem img1="Chikankari Woven kurta.png" img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem img1="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" img2="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5" />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem img1="https://api.spicezgold.com/download/file_1734529474612_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp" img2="https://api.spicezgold.com/download/file_1734529474616_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-3-202304080900.webp"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem img1="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" img2="https://api.spicezgold.com/download/file_1734690981299_c56f7a00-e9c5-43dc-8288-190cfc0fef3e1714702040062RARERABBITMenComfortOpaqueCasualShirt3.jpg"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem img1="https://api.spicezgold.com/download/file_1734529758900_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-0-202311010723.webp" img2="https://api.spicezgold.com/download/file_1734529758902_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-1-202311010723.webp"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem img1="https://api.spicezgold.com/download/file_1734529803471_zoom_0-1673275594.webp" img2="https://api.spicezgold.com/download/file_1734529803472_zoom_1-1673275594.webp"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem img1="https://api.spicezgold.com/download/file_1734529876636_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-0-202201130044.jpg" img2="https://api.spicezgold.com/download/file_1734529883112_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-3-202201130044.jpg"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem img1="https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" img2="https://api.spicezgold.com/download/file_1734528821894_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5"/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem img1="https://api.spicezgold.com/download/file_1734528862995_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp" img2="https://api.spicezgold.com/download/file_1734528862997_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg"
             discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5"/>
          </SwiperSlide>
          </Swiper>

             

            </div>

        </section>
    )
}