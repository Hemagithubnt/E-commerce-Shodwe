import { BrowserRouter, Routes,Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/ProductListing" exact={true} element={<ProductListing/>}/> 
          <Route path="/ProductDetails/:id" exact={true} element={<ProductDetails/>}/> 
           </Routes>
           <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
