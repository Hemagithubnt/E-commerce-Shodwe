import { BrowserRouter, Routes,Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/ProductListing" element={<ProductListing/>}/> 
           </Routes>
           <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
