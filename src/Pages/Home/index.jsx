import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";

function Home() {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="py-16 bg-white">
        <div className="container flex items-center justify-between">
          <div className="freeshipping w-full p-4 py-2 border-2 border-[#ff5252] flex item-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="size-10 text-[#000]" />
              <span className=" font-[600] text-[20px] text-[#000]">FREE SHIPPING</span>
            </div>
            <div className="col2"><p className=" mt-2 font-[500]  text-[rgba(0 0 0 1)]">Free Delivery On Your First Order and Over $200</p></div>
            <p className="font-bold text-[25px] text-[#000]">- Only $200*</p>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
    </>
  );
}

export default Home;
