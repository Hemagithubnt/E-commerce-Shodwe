import {useState}  from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";

import { Button } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import Rating from "@mui/material/Rating";
import QtyBox from "../QuintityBox";





export default function ProductDetailsRight() {
   const [productActionIndex, setProductActionIndex] = useState(null);
    return (
        <>
         <h1 className="text-[24px] font-[600] mb-3">
              women red round neck kurta pant set with dupatta
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-[13px]">
                Brands :{" "}
                <span className="font-[500] text-black">
                  House of Chikankari
                </span>
              </span>
              <span>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
              </span>
              <span className="text-[13px] cursor-pointer">Review (4)</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-600 font-[500] text-[15px]">
                1500Rs
              </span>
              <span className="NewPrice text-red-500 font-[500] text-[15px]">
                1400Rs
              </span>
              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>

            <p className="mt-3 pr-10 text-base/7 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size: </span>
              <div className="actions flex items-center gap-1 ">
                <Button
                  className={`${productActionIndex === 0 ? "btn" : ""}`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${productActionIndex === 1 ? "btn" : ""}`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${productActionIndex === 2 ? "btn" : ""}`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${productActionIndex === 3 ? "btn" : ""}`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="text-[14px] mt-5 mb-2">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>
            <div className="flex items-center gap-4">
              <div className="QtyBoxWrapper w-[70px]">
                <QtyBox />
              </div>
              <Button className="btn primary flex gap-2 ml-4">
                <MdOutlineShoppingCart className="text-[22px]" />
                Add to Cart
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4 mb-10">
              <span
                className="flex items-center gap-2 text-[15px] link cursor-pointer 
            font-[500]"
              >
                <FaRegHeart />
                Add to Wishlist
              </span>
              <span
                className="flex items-center gap-2 text-[15px] link cursor-pointer 
            font-[500]"
              >
                <LuGitCompareArrows />
                Add to Compare
              </span>
            </div>
        </>
    );
}