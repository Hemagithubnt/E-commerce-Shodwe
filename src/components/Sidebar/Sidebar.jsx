import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/style.css";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";

export default function Sidebar() {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvaiFilter, setIsOpenAvaiFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar">
      <div className="box ">
        <h3 className="text-[16px] font-[600] flex items-center pr-4 mt-3 mb-2 ">
          Shop by Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
       <div className="box">
        <h3 className=" text-[16px] font-[600] flex items-center pr-4 mt-3 mb-2 ">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenAvaiFilter(!isOpenAvaiFilter)}
          >
            {isOpenAvaiFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvaiFilter}>
          <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="Available(18)"
              className="w-full"
            /></div>
              <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="In Stock(10)"
              className="w-full"
            /></div>
              <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="Not available(18)"
              className="w-full"
            /></div>
             

        </Collapse>
      </div>
       <div className="box">
        <h3 className=" text-[16px] font-[600] flex items-center pr-4 mt-3 mb-2 ">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="Small(8)"
              className="w-full"
            /></div>
              <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="Medium(5)"
              className="w-full"
            /></div>
              <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="Large(18)"
              className="w-full"
            /></div>
             <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="XL(8)"
              className="w-full"
            /></div>
             <div className="Scroll">
            <FormControlLabel
              control={
                <Checkbox size="small" className="border !border-black" />
              }
              label="XXL(3)"
              className="w-full"
            /></div>
            
             

        </Collapse>
      </div>
    </aside>
  );
}
