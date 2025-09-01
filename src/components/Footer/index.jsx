import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { Link, Links } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

import Drawer from "@mui/material/Drawer";
import CartPanel from "../cartPanelApp.jsx";
import { Button } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import { MyContext } from "../../App";

export default function Footer() {
  const context = useContext(MyContext);
  return (
    <>
    <footer className="foot py-6 bg-[#fafafa] border-t-[1px] border-gray-300">
      <div className="container">
        <div className="flex items-center justify-center gap-6">
          <div className="col flex items-center justify-center flex-col group w-[15%] ">
            <LiaShippingFastSolid className="text-[50px] hover:text-red-500 transition-all duration-300 hover:-translate-y-4 " />
            <h3 className="text-[18px] font-[600] mt-3">Free Shipping</h3>
            <p className="text-[14px] font-[500]">For all Orders Over $100</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <PiKeyReturnLight className="text-[50px] hover:text-red-500 transition-all duration-300 hover:-translate-y-4" />
            <h3 className="text-[18px] font-[600] mt-3">30 Days Returns</h3>
            <p className="text-[14px] font-[500]">For an Exchange Product</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BsWallet2 className="text-[50px] hover:text-red-500 transition-all duration-300 hover:-translate-y-4" />
            <h3 className="text-[18px] font-[600] mt-3">Secured Payment</h3>
            <p className="text-[14px] font-[500]">Payment Cards Accepted</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <GoGift className="text-[50px] hover:text-red-500 transition-all duration-300 hover:-translate-y-4" />
            <h3 className="text-[18px] font-[600] mt-3">Special Gifts</h3>
            <p className="text-[14px] font-[500]">Our First Product Order</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BiSupport className="text-[50px] hover:text-red-500 transition-all duration-300 hover:-translate-y-4" />
            <h3 className="text-[18px] font-[600] mt-3">Support 24/7</h3>
            <p className="text-[14px] font-[500]">Contact us Anytime</p>
          </div>
        </div>
      </div>
      
      <br></br> <br></br>
      <hr className="text-[rgba(0,0,0,0.2)]" />

      {/* CHANGE 1: Removed nested container and added proper flex classes */}
      <div className="footerlast py-10">
        <div className="container">
          {/* CHANGE 2: Added flex and proper direction classes to make parts align horizontally */}
          <div className="flex items-start justify-between gap-8 ">
            <div className="part_1 flex flex-col items-start w-[30%] gap-4 group border-r border-[rgba(0,0,0,0.1)] pl-20">
              <h3 className="text-[15px] font-[600] text-black">Contact Us</h3>
              <p className="text-[13px] font-[400] w-50">
                Classyshop - Mega Super Store 507-Union Trade Centre France
              </p>
              <Link to="mailto:someone@example.com" className="link">
                <p className="text-[12px] font-[500]">sales@yourcompany.com</p>
              </Link>
              <h1 className="text-[20px] font-[500] text-red-500">(+91) 9876-543-210</h1>
              <div className="flex justify-center items-center gap-2">
                <IoChatboxOutline className="text-[40px] font-[500] text-red-500"/>
                <div>
                  <h3 className="text-[15px] font-[700] text-black">Online Chat</h3>
                  <h3 className="text-[16px] font-[700] text-black">Get Expert Help</h3>
                </div>
              </div>
            </div>

            {/* CHANGE 3: Increased width and added more content for better layout */}
            <div className="part_2 w-[40%] flex pl-10">
            <div className="part_2_col_1 flex flex-col items-start w-[50%] gap-4 group">
              <h3 className="text-[15px] font-[600] text-black">Products</h3>
             <ul className="list">
                <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Prices drops</li>
                 <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">New Products</li>
                  <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Best Sales</li>
                   <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Contact Us</li>
                    <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Sitemap</li>
                     <li className="list-none text-[14px] w-fullmb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Stores</li>
                     
             </ul>
            </div>
             <div className="part_2_col_2 flex flex-col items-start w-[50%] gap-4 group">
              <h3 className="text-[15px] font-[600] text-black">Our Company</h3>
             <ul className="list">
                <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Delivery</li>
                 <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Legal Notice</li>
                  <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Term and Conditions of use</li>
                   <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">About Us</li>
                    <li className="list-none text-[14px] w-full mb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Secure Payment</li>
                     <li className="list-none text-[14px] w-fullmb-2 hover:translate-x-2 transition-all duration-300 hover:text-red-500 cursor-pointer">Login</li>
                     
             </ul>
            </div>
             </div>
            {/* CHANGE 4: Added part_3 for better balance */}
            <div className="part_3 flex flex-col items-start w-[30%] gap-4 group">
              <h3 className="text-[15px] font-[600] text-black">Subscribe To Newsletter</h3>
              <p className="text-[13px] font-[400] w-55">Subscribe to our latest newsletter to get news about special discounts.</p>
               <form>
                <input type="email" placeholder="Your Email Address" className="p-3 border-[rgba(0,0,0,0.1)] border outline-none w-full"/>
                <button className="rounded-md w-[60%] bg-[#ff5252] h-10 mt-3">SUBSCRIBE</button><br></br>
                <p className="mt-2 font-[500] text-[13px]"><Checkbox {...label} defaultChecked size="small" /> I agree to the terms and conditions and the privacy policy</p>
               </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white mb-0">
        <div className="container flex items-center justify-between ">
        
            
            <ul className="flex items-center justify-between gap-3">
                <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                 border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-red-500 transition-all">
                    <FaFacebookF className="font-[15px] hover:text-white"/>
                    </Link>
                </li>
                <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                 border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-red-500 transition-all">
                    <AiFillYoutube className="font-[15px] hover:text-white"/>
                    </Link></li>
                    <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                 border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-red-500 transition-all">
                    <FaPinterestP className="font-[15px] hover:text-white"/>
                    </Link></li>
                    <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                 border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-red-500 transition-all">
                    <RiTwitterXFill className="font-[15px] hover:text-white"/>
                    </Link></li>
                    <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                 border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-red-500 transition-all">
                    <FaInstagram className="font-[15px] hover:text-white"/>
                    </Link></li>
               </ul>
               
             <p className="link text-center mb-0">© 2025 - Ecommerce software by PrestaShop™</p>
              
              <div className="flex items-center ">
                <img src="first_payment.png" alt="first_payment" />
                <img src="second_payment.png" alt="second_payment" />
                <img src="third_payment.png" alt="third_payment" />
                <img src="fourth_payment.png" alt="fourth_payment" />
                <img src="fifth_payment.png" alt="fifth_payment" />
              </div>
              


        </div>
    </div>

      {/* cart Pannel */}
      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleCartPanel(false)}
        anchor="right"
        className="cartPanel"
        PaperProps={{
          className: "w-[400px]",
        }}
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b-[1px] border-gray-300">
          <h4>Shopping cart(1)</h4>
          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]">
            <IoCloseSharp
              className="text-[20px] cursor-pointer "
              onClick={context.toggleCartPanel(false)}
            />
          </Button>
        </div>

      
        {/* cart item ko hum iss component se le lenge samajhe guru */}

        <CartPanel/>
      </Drawer>
  
    </>

  );
}
