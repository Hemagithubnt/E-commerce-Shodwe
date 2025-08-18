import { useState } from "react";
import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import CategoryPanel from "./CategoryPanel";
import "../Nevigation/style.css"; // Import the CSS file for styles

function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-end items-center gap-3 py-4">
          
          {/* Left side: SHOP BY CATEGORIES */}
          <div className="col_1 w-[20%]">
            <Button
              onClick={() => setDrawerOpen(true)}
              className="!text-black gap-2 w-full"
              sx={{ textTransform: "none" }}
            >
              <RiMenu2Fill className="text-[18px]" />
              SHOP BY CATEGORIES
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          {/* Middle: Menu items */}
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-2 nav">
              <li className="list-none">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none relative">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Fashion
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all z-1000 ">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="text-[14px] w-full ">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Men
                        </Button>
                      </Link>
                       <div className="submenu_2 absolute top-[0%] left-[101%] min-w-[150px] bg-white shadow-md opacity-0 transition-all ">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="text-[14px] w-full ">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          T-shirt
                        </Button>
                      </Link>
                      </li>
                      <li className="list-none w-full">
                      <Link to="/" className="text-[14px] font-[500] link transition">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Jeans
                        </Button>
                      </Link>
                      </li>
                      <li className="list-none w-full">
                      <Link to="/" className="text-[14px] font-[500] link transition">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Footwear
                        </Button>
                      </Link>
                      </li>


                      <li className="list-none w-full">
                      <Link to="/" className="text-[14px] font-[500] link transition">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Watch
                        </Button>
                      </Link>
                      </li>
                      <li className="list-none w-full">
                      <Link to="/" className="text-[14px] font-[500] link transition">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Pents
                        </Button>
                      </Link>
                      </li>
          
                  </ul>
                </div>
                      </li>
                      <li className="list-none w-full">
                      <Link to="/" className="text-[14px] font-[500] link transition">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Women
                        </Button>
                      </Link>
                      </li>
                      <li className="list-none w-full">
                      <Link to="/" className="text-[14px] font-[500] link transition">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Kids
                        </Button>
                      </Link>
                      </li>


                      <li className="list-none w-full">
                      <Link to="/" className="text-[14px] font-[500] link transition">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Boys
                        </Button>
                      </Link>
                      </li>
                      <li className="list-none w-full">
                      <Link to="/" className="text-[14px] font-[500] link transition">
                        <Button
                          color="inherit"
                          className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252] !text-left w-full !justify-start !rounded-none "
                        >
                          Girl
                        </Button>
                      </Link>
                      </li>
          
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link to="/" className="text-[14px] font-[500] link transition">
                  <Button
                    color="inherit"
                    className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#ff5252]"
                  >
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side: Info text */}
          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-2 mb-0 mt-0">
              <BsFillRocketTakeoffFill />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Drawer controlled via props */}
      <CategoryPanel
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}

export default Navigation;
