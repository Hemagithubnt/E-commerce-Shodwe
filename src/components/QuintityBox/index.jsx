import Button from "@mui/material/Button";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";



export default function QtyBox(){
    
const [qtyValue,setQtyValue] = useState(1);

const plusQty = () =>{
    setQtyValue(qtyValue+1)
}
const minusQty = () =>{
  qtyValue===1 ? setQtyValue(1): setQtyValue(qtyValue-1);
}

    return(
        <div className="qtyBox flex items-center relative">
          <input type="number" className="w-full h-[40px] p-2 text-[15px] focus:outline-none
          border border-[rgba(0,0,0,0.2)] rounded-md pl-5" value={qtyValue}/>
          <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
            <Button className="!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] !rounded-none
            hover:!bg-[#f1f1f1]" onClick={plusQty}>
                <FaAngleUp className="text-12 opacity-55"/>
            </Button>
             <Button className="!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] !rounded-none
             hover:!bg-[#f1f1f1]" onClick={minusQty}>
                <FaAngleDown className="text-12 opacity-55"/>
            </Button>
          </div>
        </div>

    )
}