import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";
import QtyBox from "../../components/QuintityBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider/Index";

export default function ProductDetails() {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activetab, setActivetab] = useState(0);
  return (
    <>
      <div className="py-5">
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
            <Link
              underline="hover"
              color="inherit"
              className="link transition-all"
            >
              House of Chikankari
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white p-3">
        <div className="container flex gap-10">
          <div className="productZoomContainer w-[30%]">
            <ProductZoom />
          </div>
          <div className="ProductContent w-[60%] pl-5">
            <h1 className="text-[24px] font-[600] mb-3">
              women red round neck kurta pant set with dupatta
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-[13px]">
                Brands :{" "}
                <span className="font-[500] text-black">
                  House of Chikankari
                </span>
              </span>
              <span>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
              </span>
              <span className="text-[13px] cursor-pointer">Review (4)</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-600 font-[500] text-[15px]">
                1500Rs
              </span>
              <span className="NewPrice text-red-500 font-[500] text-[15px]">
                1400Rs
              </span>
              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>

            <p className="mt-3 pr-10 text-base/7 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size: </span>
              <div className="actions flex items-center gap-1 ">
                <Button
                  className={`${productActionIndex === 0 ? "btn" : ""}`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${productActionIndex === 1 ? "btn" : ""}`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${productActionIndex === 2 ? "btn" : ""}`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${productActionIndex === 3 ? "btn" : ""}`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="text-[14px] mt-5 mb-2">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>
            <div className="flex items-center gap-4">
              <div className="QtyBoxWrapper w-[70px]">
                <QtyBox />
              </div>
              <Button className="btn primary flex gap-2 ml-4">
                <MdOutlineShoppingCart className="text-[22px]" />
                Add to Cart
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4 mb-10">
              <span
                className="flex items-center gap-2 text-[15px] link cursor-pointer 
            font-[500]"
              >
                <FaRegHeart />
                Add to Wishlist
              </span>
              <span
                className="flex items-center gap-2 text-[15px] link cursor-pointer 
            font-[500]"
              >
                <LuGitCompareArrows />
                Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activetab === 0 && "text-red-500"
              }`}
              onClick={() => setActivetab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activetab === 1 && "text-red-500"
              }`}
              onClick={() => setActivetab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activetab === 2 && "text-red-500"
              }`}
              onClick={() => setActivetab(2)}
            >
              Reviews (5)
            </span>
          </div>
          {activetab === 0 && (
            <div className="shadow-2xl w-full p-5 rounded-md">
              <p className="text-base/7 f-[14px] mb-5">
                The best is yet to come! Give your walls a voice with a framed
                poster. This aesthethic, optimistic poster will look great in
                your desk or in an open-space office. Painted wooden frame with
                passe-partout for more depth.
              </p>
              <h4 className="font-[600]">Lightweight Design</h4>
              <p className="text-base/7 f-[14px] mb-5">
                Designed with a super light geometric case, the Versa family
                watches are slim, casual and comfortable enough to wear all day
                and night. Switch up your look with classic, leather, metal and
                woven accessory bands. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>
              <h4 className="font-[600]">Free Shipping & Return</h4>
              <p className="text-base/7 f-[14px] mb-5">
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in US.
              </p>
              <h4 className="font-[600]"> Money Back Guarantee</h4>
              <p className="text-base/7 f-[14px] mb-5">
                We guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>
              <h4 className="font-[600]"> Online Support</h4>
              <p className="text-base/7 f-[14px] mb-5">
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange.
              </p>
            </div>
          )}

          {activetab === 1 && (
            <div className="shadow-2xl w-full p-5 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Stand Up
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folded (w/o wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folded (w/ wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Door Pass Through
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </th>
                      <td class="px-6 py-4">32.5″L x 18.5″W x 16.5″H</td>
                      <td class="px-6 py-4">32.5″L x 24″W x 18.5″H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                      <td class="px-6 py-4">Laptop PC</td>
                      <td class="px-6 py-4">$1999</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                      <td class="px-6 py-4">Accessories</td>
                      <td class="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activetab === 2 && (
            <div className="shadow-2xl p-5 rounded-md w-[75%]">
              <div className="w-full productReviewsContainer">
                <h2 className="font-[600] text-18px">
                  Customer questions & answers
                </h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review w-full flex items-center justify-between pb-5 pt-5 border-b border-[rgba(0,0,0,.1)]">
                    <div className="info w-[60%] flex items-center gap-5">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full "
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="font-[600] text-[16px]">Hemant Yadav</h4>
                        <h5 className="font-[600] text-[13px]">2025-08-29</h5>
                        <p className="mt-0 mb-0">
                          Nice Product Ji lore Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Sed autem voluptate
                          corrupti asperiores quibusdam nostrum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,.1)]">
                    <div className="info w-[60%] flex items-center gap-5">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full "
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="font-[600] text-[16px]">Hemant Yadav</h4>
                        <h5 className="font-[600] text-[13px]">2025-08-29</h5>
                        <p className="mt-0 mb-0">
                          Nice Product Ji lore Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Sed autem voluptate
                          corrupti asperiores quibusdam nostrum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,.1)]">
                    <div className="info w-[60%] flex items-center gap-5">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full "
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="font-[600] text-[16px]">Hemant Yadav</h4>
                        <h5 className="font-[600] text-[13px]">2025-08-29</h5>
                        <p className="mt-0 mb-0">
                          Nice Product Ji lore Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Sed autem voluptate
                          corrupti asperiores quibusdam nostrum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,.1)]">
                    <div className="info w-[60%] flex items-center gap-5">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full "
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="font-[600] text-[16px]">Hemant Yadav</h4>
                        <h5 className="font-[600] text-[13px]">2025-08-29</h5>
                        <p className="mt-0 mb-0">
                          Nice Product Ji lore Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Sed autem voluptate
                          corrupti asperiores quibusdam nostrum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,.1)]">
                    <div className="info w-[60%] flex items-center gap-5">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full "
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="font-[600] text-[16px]">Hemant Yadav</h4>
                        <h5 className="font-[600] text-[13px]">2025-08-29</h5>
                        <p className="mt-0 mb-0">
                          Nice Product Ji lore Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Sed autem voluptate
                          corrupti asperiores quibusdam nostrum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,.1)]">
                    <div className="info w-[60%] flex items-center gap-5">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full "
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="font-[600] text-[16px]">Hemant Yadav</h4>
                        <h5 className="font-[600] text-[13px]">2025-08-29</h5>
                        <p className="mt-0 mb-0">
                          Nice Product Ji lore Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Sed autem voluptate
                          corrupti asperiores quibusdam nostrum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,.1)]">
                    <div className="info w-[60%] flex items-center gap-5">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full "
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="font-[600] text-[16px]">Hemant Yadav</h4>
                        <h5 className="font-[600] text-[13px]">2025-08-29</h5>
                        <p className="mt-0 mb-0">
                          Nice Product Ji lore Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Sed autem voluptate
                          corrupti asperiores quibusdam nostrum.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                  <br />
                </div>
                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write  review..."
                      multiline
                      className="w-full"
                      rows={5}
                    />
                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={3} size="small" />
                    <div className="flex items-center mt-5">
                      <Button className="btn primary">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="pt-8">
          <h2 className="text-[20px] font-[600] container">Related Products</h2>
          <ProductsSlider items="6" />
        </div>
      </section>
    </>
  );
}
