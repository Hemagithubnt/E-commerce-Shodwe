import Button from "@mui/material/Button";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PiMinusSquare } from "react-icons/pi";

export default function CategoryCollapse({ categoryName = "Fashion", items = [] }) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openSubCategories, setOpenSubCategories] = useState({});

  const toggleSubCategory = (index) => {
    setOpenSubCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Default items if none provided
  const defaultItems = [
    {
      name: "Apparel",
      subItems: ["Crepe T-shirt", "Leather watch", "Rolling Diamond", "Smart Tablet"]
    }
  ];

  const categoryItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="w-full mb-2">
      <div className="list-none flex items-center relative">
        <Link to="/" className="w-full">
          <Button className="w-full !justify-start !text-left px-3 !text-[rgba(0,0,0,.8)]">
            {categoryName}
          </Button>
        </Link>
        {openCategory ? (
          <PiMinusSquare
            className="absolute top-[10px] right-[15px] cursor-pointer"
            onClick={() => setOpenCategory(false)}
          />
        ) : (
          <FaRegSquarePlus
            className="absolute top-[10px] right-[15px] cursor-pointer"
            onClick={() => setOpenCategory(true)}
          />
        )}
      </div>
      
      {/* Changed from absolute to normal flow */}
      {openCategory && (
        <div className="w-full pl-3 mt-1">
          {categoryItems.map((item, index) => (
            <div key={index} className="mb-1">
              <div className="list-none flex items-center relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !justify-start !text-left px-3 !text-[rgba(0,0,0,.8)]">
                    {item.name}
                  </Button>
                </Link>
                {item.subItems && (
                  <>
                    {openSubCategories[index] ? (
                      <PiMinusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => toggleSubCategory(index)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={ () => toggleSubCategory(index)}
                      />
                    )}
                  </>
                )}
              </div>

              {/* Changed from absolute to normal flow */}
              {openSubCategories[index] && item.subItems && (
                <div className="w-full pl-3 mt-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="block w-full justify-start text-left px-3 py-1 cursor-pointer 
                                 transition text-[13px] hover:bg-gray-100 rounded"
                      >
                        {subItem}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}