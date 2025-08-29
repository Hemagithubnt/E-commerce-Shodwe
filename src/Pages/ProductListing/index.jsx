import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductsItem from "../../components/Products-Item";
import ProductsItemListView from "../../components/Products-ItemListview";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from '@mui/material/Pagination';

const ProductListing = () => {
  const [itemView , setIsItemView]= useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="py-5 pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>
          <div className="rightContent w-[80%]">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-3 ItemViewActions">
                <Button
// dekh lo yha hune curly braces lagake condition lga di hai jo khta hai ki if state list ho to active class dedo and 
// humne uper  ItemViewActions name k class or di hai tab Indexcss page pr issi pr styling lagayi hai 
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
                    ${itemView === "list" && 'active'}`}    
                  onClick={() => setIsItemView("list")}
                >
                  <MdOutlineMenu className="text-[rgba(0,0,0,.7)]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]
                    ${itemView === "grid" && 'active'}`} 
                  onClick={() => setIsItemView("grid")}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,.7)]" />
                </Button>
                <span className="text-[14px] font-[500] text-[rgba(0,0,0,.7)]">
                  There are 27 products.
                </span>
              </div>
              <div className="col2 flex items-center justify-end ml-auto gap-3 pr-4">
                <span className="text-[14px] font-[500] text-[rgba(0,0,0,.7)]">
                  Sort By:
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !text-[#000] !capitalize !border border-[#000]"
                >
                  Sales, highest to lowest
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[12px] !text-[#000] !capitalize "
                  >
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[12px] !text-[#000] !capitalize "
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[12px] !text-[#000] !capitalize "
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[12px] !text-[#000] !capitalize "
                  >
                    Name, Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[12px] !text-[#000] !capitalize "
                  >
                    Price, Low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[12px] !text-[#000] !capitalize "
                  >
                    Price, High to Low
                  </MenuItem>
                </Menu>
              </div>
            </div>
 {/* if i write heregrid simplly then it valid on both condition list and grid so when i gave Product-ItemListView simple
 then it is not taken and not spread mon full page so i use condition on grid so it can only on grid time not list time  */}
            <div className={`grid${itemView==='grid' ? " grid-cols-4 md:grid-cols-4 gap-3" : " grid-cols-1 md:grid-cols-1"}  gap-4`}>
              {
                itemView === 'grid' ?
                (<>
                <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
              <ProductsItem
                img1="Chikankari Woven kurta.png"
                img2="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                discount="15%"
                brand="House of Chikankari"
                item="Chikankari Woven Kurta"
                money="1200rs"
                discount_money="1000rs"
                value="5"
              />
                </> )
                :
                (
                  <>
                   <ProductsItemListView img1="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" img2="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
                   discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5" para="This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions." />
                     <ProductsItemListView img1="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" img2="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
                   discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5" para="This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions." />
                     <ProductsItemListView img1="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" img2="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
                   discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5" para="This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions." />
                     <ProductsItemListView img1="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" img2="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
                   discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5" para="This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions." />
                     <ProductsItemListView img1="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" img2="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
                   discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5" para="This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions." />
                     <ProductsItemListView img1="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" img2="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg"
                   discount="15%" brand="House of Chikankari" item="Chikankari Woven Kurta" money="1200rs" discount_money="1000rs" value="5" para="This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions."/>
                   
                  </>
                )
              }
              
            </div>
            <div className="flex items-center justify-center mt-10">
                 <Pagination count={10} showFirstButton showLastButton />
            </div>
              
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
