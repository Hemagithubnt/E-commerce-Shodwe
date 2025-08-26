import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "../Nevigation/style.css"; // Import the CSS file for styles
import CategoryCollapse from "../../CategoryCollapse/CategoryCollapse";
function CategoryPanel({ open, onClose }) {
    const categories = [
    {
      name: "Fashion",
      items: [
        {
          name: "Apparel",
          subItems: ["Crepe T-shirt", "Leather watch", "Rolling Diamond", "Smart Tablet"]
        },
        {
          name: "Accessories",
          subItems: ["Bags", "Jewelry", "Belts", "Sunglasses"]
        }
      ]
    },
    {
      name: "Electronics",
      items: [
        {
          name: "Mobile",
          subItems: ["Smartphones", "Cases", "Chargers", "Headphones"]
        },
        {
          name: "Laptops",
          subItems: ["Gaming", "Business", "Ultrabooks", "Accessories"]
        }
      ]
    },
    {
      name: "Home & Garden",
      items: [
        {
          name: "Furniture",
          subItems: ["Chairs", "Tables", "Sofas", "Storage"]
        },
        {
          name: "Kitchen",
          subItems: ["Appliances", "Cookware", "Utensils", "Storage"]
        }
      ]
    },
    {
      name: "Sports",
      items: [
        {
          name: "Fitness",
          subItems: ["Weights", "Cardio", "Yoga", "Accessories"]
        }
      ]
    }
  ];


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
     <div className="space-y-1">
          {categories.map((category, index) => (
            <CategoryCollapse
              key={index}
              categoryName={category.name}
              items={category.items}
            />
          ))}
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
