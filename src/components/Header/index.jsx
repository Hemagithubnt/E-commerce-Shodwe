import { Link } from "react-router-dom";
import Search from "../search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoMdCart } from "react-icons/io";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Nevigation";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  return (
    <header className="bg-white">
      <div className="top-strip py-1 border-t-[1px] border-gray-300 border-b-[1px] ">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] font-[500]  hover:text-orange-600 transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] font-[500]  hover:text-orange-600 transition"
                  >
                    Order-Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-4  border-gray-300 border-b-[1px]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[30%]">
            <Link to="/">
              <img src="/Ecom-modified.png" alt="Logo" className=" h-10 w-60" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-8 justify-end">
            <ul className="flex items-center gap-2 w-full ">
              <li className="list-none">
                <Link
                  to="/login"
                  className="text-[16px] font-[500]
                            link transition"
                >
                  Login
                </Link>
                ||
                <Link
                  to="/register"
                  className="text-[16px] font-[500] link transition"
                >
                  Register
                </Link>
              </li>
              <li>
                 <Tooltip title="Compare" placement="top">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <LuGitCompareArrows />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                 <Tooltip title="Wishlist" placement="top">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                 <Tooltip title="cart" placement="top">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoMdCart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
