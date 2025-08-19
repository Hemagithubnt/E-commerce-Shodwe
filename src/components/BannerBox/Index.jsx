import { Link } from "react-router-dom";

export default function BannerBox({ img }) {
  return (
    
  
      <div className="box bannerBox">
          <Link to="/">
        <img src={img} alt="AddsBanner" className="w-full rounded-lg transition-all hover:scale-103 hover:rotate-2" />
          </Link>
      </div>
  
  );
}
