import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [eyeOpener, setEyeOpener] = useState(false);
  
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-2xl w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black font-[600]">
            Login to Your account
          </h3>
          <form  className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
              type="email"
                id="email"
                label="Email Id *"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="password"
                label="password *"
                variant="outlined"
                className="w-full"
                type={eyeOpener ? "text" : "password"}
              />
              <Button 
                className="!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black" 
                onClick={() => setEyeOpener(!eyeOpener)}
              >
                {eyeOpener ? <IoMdEye className="text-[20px] opacity-75"/> : <IoMdEyeOff className="text-[20px] opacity-75"/>}
              </Button>
            </div>
            <a className="link cursor-pointer text-[14px] font-[600]">Forget Password?</a>
            <div className="flex items-center w-full btn-lg">
              <Button className="btn primary w-full">Login</Button>
            </div>
            <p className="text-[14px] text-center mt-5">Not Registered? <Link className="link text-[14px] font-[600] text-red-400" to="/register">Sign Up</Link></p>
            <p className="text-center mt-3">Or continue with social account</p>
            <Button className="flex gap-3 w-full !mt-3 !bg-[#dacece] btn-lg !text-black"><FcGoogle/> Login with Google</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
