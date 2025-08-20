 import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";




export default function BlogItem() {
  return (
    <div className="BlogItem group ">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg"
          alt="blog1" className="w-full transition-all hover:scale-105 hover:rotate-1"
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] 
        right-[15px] z-50 bg-red-500 rounded-md p-1 text-[11px] font-[400] gap-1">
            <IoMdTime className="text-[]16px"/>19 AUGUST, 2025
            </span>
      </div>

      <div className="info py-4 ">
        <h2 className="text-[15px] font-[600] link text-black">Nullam ullamcorper ornare molestie</h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit............. 
        </p>
        <Link to='/' className="link font-[500] text-[14px] flex items-center gap-1">Read More<IoIosArrowForward/></Link>
      </div>
    </div>
  );
}
