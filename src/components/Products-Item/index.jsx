import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { MdZoomOutMap } from "react-icons/md";
import Button from "@mui/material/Button";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import { useContext } from "react";
import { MyContext } from "../../App";


export default function ProductsItem(props) {
  const context = useContext(MyContext);
  return (
    <div className="ProductItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] group">
      <div className="imgWrapper w-[100%] rounded-md h-[200px] overflow-hidden relative">

{/* here we use 2 photoes in one frame where i use relative and absolute position now we can stay 2 photos in 1 div or frame  */}

        <Link to="/">
        <div className="img h-[200px] overflow-hidden relative">
        <img
          src={props.img1}
          className="w-full rounded-md"
        />
          <img
          src={props.img2}
          className="w-full rounded-md transition-all duration-700 absolute top-0 left-0 opacity-0 hover:opacity-100 hover:scale-110 "
        />
        </div>

        </Link>
{/* here we write many things on the image like make many button with link and a discount span also and eveyone have a
 z index because without z index it all invisible on the image  */}
{/* ------------------------------------------------------------------------------------------------------------------------- */}
        <span
          className="discount flex items-center absolute top-[10px] left-[10px] z-50
                bg-red-600 text-white rounded-lg p-[2px] text-[12px] font-[500]"
        >
          {props.discount}
        </span>
        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-1 flex-col w-[50px]
        transition-all duration-300 group-hover:top-[15px]">
          <Link to="/">
           <Tooltip title="Like Button">
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full text-black !bg-white hover:!bg-red-500 transition-all duration-300">
              <FaRegHeart className="text-[18px] !text-black hover:text-white transition-all duration-300"/>
            </Button>
            </Tooltip>
          </Link>
          <Link to="/">
           <Tooltip title="Compare">
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full text-black !bg-white hover:!bg-red-500 transition-all duration-300">
              <LuGitCompareArrows className="text-[18px] text-black hover:text-white transition-all duration-300" />
            </Button></Tooltip>
          </Link>
          <Link to="/">
          <Tooltip title="Zoom">
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full text-black !bg-white hover:!bg-red-500
             transition-all duration-300" onClick={() => context.setOpenProductDetailsModal(true)}>
              <MdZoomOutMap className="text-[18px] text-black hover:text-white transition-all duration-300" />
            </Button></Tooltip>
          </Link>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}
      </div>
      <div className="info p-3 bg-[#f1f1f1]">
        <h6 className="text-[14px]">
          <Link to="/" className="link">
            {props.brand}
          </Link>
        </h6>
        <h3 className="text-[14px] title mt-1 mb-3 font-[500] text-[#000]">
          <Link to="/" className="link">
           {props.item}
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={props.value} size="small" readOnly />
          <div className="flex items-center gap-4 ml-2  ">
        <span className="oldPrice line-through text-gray-600 font-[600]">
          {props.money}
        </span>
        <span className="NewPrice text-red-500 font-bold">{props.discount_money}</span>
      </div>
      </div>
    
    </div>
  );
}
