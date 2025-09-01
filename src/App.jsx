import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { createContext, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom";
import { Button } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsRight from "./components/ProductDetailsDialog";
import CartPage from "./Pages/Cart";



 const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth] = useState("lg");
  const [fullWidth] = useState(true);
  const [openCartPanel, setOpenCartPanel] = useState(true);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };
  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  return (
    <>
      <BrowserRouter>
    <MyContext.Provider value={{setOpenProductDetailsModal, setOpenCartPanel, openCartPanel, toggleCartPanel}}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/register" exact={true} element={<Register />} />
            <Route path="/cart" exact={true} element={<CartPage />} />
            
            <Route
              path="/ProductListing"
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path="/ProductDetails/:id"
              exact={true}
              element={<ProductDetails />}
            />
           
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-[full] productDetalisModelContainer relative overflow-hidden">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] 
            !absolute top-[0px] right-[0px] !bg-[#f1f1f1] "
              onClick={handleCloseProductDetailsModal}
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>

            <div className="col1 w-[40%]  ">
              <ProductZoom />
            </div>
            <div className="col2 w-[80%] py-5 px-7 productContent ">
              <ProductDetailsRight />
            </div>
          </div>
        </DialogContent>
      </Dialog>

    
    </>
  );
}

export default App;

export { MyContext };
