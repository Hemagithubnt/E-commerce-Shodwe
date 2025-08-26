import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProductsSlider from "../../components/ProductsSlider/Index";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItems";
import HomeSliderV2 from "../../components/HomeSliderV-2";
import BannerBoxV2 from "../../components/BannerBoxV2/Index";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";
import Like from "../../components/Like button";

function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part-1 w-[70%]">
            <HomeSliderV2/>
          </div>
          <div className="part-2 w-[30%] flex gap-5 justify-between flex-col items-center">
            <BannerBoxV2 info="left" title="Samsung Gear VR Camera" money="$120.00" img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" link="/"/>
            <BannerBoxV2  info="right" title="Marcel Dining Room Chair" money="$130.00" img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg" link="/"/>
          </div>

        </div>
      </section>

      
      <HomeCatSlider />
      <section className="bg-white py-10">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec ">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[500]">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-[55%]">
              <Box
                className="w-full"
                sx={{ width: "100%", bgcolor: "background.paper" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  aria-label="scrollable auto tabs example"
                  sx={{ width: "100%" }}
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics"/>
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ProductsSlider items="6" />
      </div>
      <section className="py-10 bg-white">
        <div className="container flex items-center justify-between ">
          <div className="freeshipping p-4 py-2 border-2 border-[#ff5252] flex item-center justify-between rounded-md w-[80%] m-auto">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="size-10 text-[#000]" />
              <span className=" font-[600] text-[20px] text-[#000]">
                FREE SHIPPING
              </span>
            </div>
            <div className="col2">
              <p className=" mt-2 font-[500]  text-[rgba(0 0 0 1)]">
                Free Delivery On Your First Order and Over $200
              </p>
            </div>
            <p className="font-bold text-[25px] text-[#000]">- Only $200*</p>
          </div>
        </div>
        <br></br> <br></br>
       
        <AdsBannerSliderV2 items={4}/>
      </section>

      <section className="py-3 bg-white  ">
        <div className="container">
          <h2 className="text-[20px] font-[600] pb-5 ">Latest Products</h2>
          <ProductsSlider items="6" />
          <AdsBannerSlider items={4} />
        </div>
        <section className="py-3 bg-white  ">
          <div className="container">
            <h2 className="text-[20px] font-[600] pb-5 ">Features Products</h2>
            <ProductsSlider items="6" />
            <AdsBannerSlider items={3} />
          </div>
        </section>
      </section>

      <section className="py-3 bg-white blogSection  ">
        <div className=" py-5 container">
          <h2 className="text-[20px] font-[600] pb-5 ">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Like/>
      </>
  );
}

export default Home;
