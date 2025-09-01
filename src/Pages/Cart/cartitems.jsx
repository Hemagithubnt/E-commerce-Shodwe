import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";

export default function CartItems(props) {
  const [selectedSize, setCartItems] = useState(props.size);
  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const opensize = Boolean(sizeanchorEl);

  const [selectedQty, setSelectedQty] = useState(props.qty);
  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  const openQty = Boolean(qtyanchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (Value) => {
    setSizeAnchorEl(null);
    if (Value !== null) {
      setCartItems(Value);
    }
  };

const handleClickQty = (event) => {
  setQtyAnchorEl(event.currentTarget); 
};


  const handleCloseQty = (Value) => {
    setQtyAnchorEl(null);
    if (Value !== null) {
      setSelectedQty(Value);
    }
  };

  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/product/7845" className="group">
          <img
            src="https://api.spicezgold.com/download/file_1734527564399_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-0-202402141853.jpg"
            alt="bag"
            className="w-full group-hover:scale-110 transition-all duration-500"
          />
        </Link>
      </div>
      <div className="w-[85%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
        <span className="text-[13px]">Fytona</span>
        <h3 className="text-[13px] font-[600]">
          <Link className="link">Fytona Medium Laptop Backpack</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center gap-4 mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1]
                  text-[10px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeanchorEl}
              open={opensize}
              onClose={() => handleCloseSize(null)} // FIXED: Now this function call works properly
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              {/* FIXED: These onClick handlers now work correctly */}
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1]
                  text-[10px] font-[600] py-1 px-2 rounded-md cursor-pointer"
                     onClick={handleClickQty}
            >
              Qty: {selectedQty} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={qtyanchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
              <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
              <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
              <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
              <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
              <MenuItem onClick={() => handleCloseQty(11)}>11</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="flex items-center gap-4 ml-2">
          <span className="oldPrice text-black font-[600] text-[14px]">
            $58
          </span>
          <span className="oldPrice text-gray-600 font-[600] text-[14px]">
            $56
          </span>
          <span className="NewPrice text-red-500 font-bold text-[14px]">
            55% OFF
          </span>
        </div>
      </div>
    </div>
  );
  // FIXED: Added proper closing for the component function
}
