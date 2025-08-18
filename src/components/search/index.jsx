
import "./style.css";
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

function Search() {
  return( 
  <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[30px] relative p-2">
    <input type="text" placeholder="Search for products....." className="w-full h-[32px] 
    focus:outline-none p-2 " />
    <Button className="!absolute top-[10px] right-[10px] z-50 !w-[37px] !min-w-[37px] h-[35]
     !rounded-full !text-black"><FaSearch className="text-[#2e2a2a] text-[15px]"/></Button>

  </div>
  )
}

export default Search;
