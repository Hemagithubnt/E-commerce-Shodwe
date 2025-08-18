import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaRegSquarePlus } from "react-icons/fa6";
import "../Nevigation/style.css"; // Import the CSS file for styles
import { Link } from "react-router-dom"; // ✅ instead of @mui/material/Link
import { useState } from "react";
import { PiMinusSquare } from "react-icons/pi";

function CategoryPanel({ open, onClose }) {
  const [openFashion, setNewFashion] = useState(false);
  const [openApparel, setNewApparel] = useState(false);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="category_panal">
      <h3 className="p-3 text-[15px] font-[500] flex items-center justify-between">
        Shop By Categories
        <span
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing when clicking inside
            onClose();
          }}
          className="cursor-pointer text-black-400"
        >
          ✖
        </span>
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left px-3 !text-[rgba(0,0,0,.8)]">
                Fashion
              </Button>
            </Link>
            {openFashion ? (
              <PiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => setNewFashion(false)}
              />):(
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => setNewFashion(true)}
            />)}
            {openFashion && (
              <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none flex items-center relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !justify-start !text-left px-3 !text-[rgba(0,0,0,.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {openApparel ? (
                    <PiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => setNewApparel(false)}
                    />
                  ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => {
                      setNewApparel(!openApparel);
                    }}
                  />)}


                  {openApparel && (
                    <ul className="inner_submenu absolute top-[100%] left-[0%] w-full pl-3 ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 cursor-pointer 
                   transition text-[13px] "
                        >
                          Crepe T-shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 cursor-pointer 
                   transition text-[13px] "
                        >
                          Leather watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 cursor-pointer 
                   transition text-[13px] "
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                      <li className="list-none mb-1">
                        <Link
                          to="/"
                          className="w-full justify-start text-left px-3 cursor-pointer transition link text-[13px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
}

export default CategoryPanel;
