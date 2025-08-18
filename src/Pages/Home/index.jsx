import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";

function Home() {
 const [value, setValue] = useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};
return (
  <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec ">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[500]">Do not miss the current offers until the end of March.</p>
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
      <Tab label="Electronics" />
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
      <section className="py-16 bg-white">
        <div className="container flex items-center justify-between ">
          <div className="freeshipping p-4 py-2 border-2 border-[#ff5252] flex item-center justify-between rounded-md w-[80%] m-auto">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="size-10 text-[#000]" />
              <span className=" font-[600] text-[20px] text-[#000]">FREE SHIPPING</span>
            </div>
            <div className="col2"><p className=" mt-2 font-[500]  text-[rgba(0 0 0 1)]">Free Delivery On Your First Order and Over $200</p></div>
            <p className="font-bold text-[25px] text-[#000]">- Only $200*</p>
          </div>
          </div>
          <br></br> <br></br>
           <AdsBannerSlider items={5}/>

         
      </section>
      <br></br>
      <br></br>
    </>
  );
}

export default Home;
