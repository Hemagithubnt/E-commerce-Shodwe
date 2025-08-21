import { Link } from "react-router-dom";
import "../BannerBoxV2/style.css";



export default function BannerBoxV2(props){
    return(
        <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
            <img src={props.img} className="w-full transition-all duration-250 hover:scale-105" />
{/* ab yha tum samajhoge ki kise image ke uper likhte hai to 2 image ke uper ek sath kese likhe vo bhi dono image pr alag alag side me 
for example 1st image pr left side me and 2nd image pr right side me vo bhi alag alag content to iske liye props use kre  */}
            <div className={`info absolute p-5 top-0 ${props.info === "left" ? "left-0" : "right-0"} w-[60%] h-[100%] 
            z-50 flex items-center justify-center flex-col gap-2`}>
                <h2 className="text-[20px] font-[600]">{props.title}</h2>
                <span className="text-[20px] text-red-500 font-[600] w-full">
                    {props.money}
                </span>
                <div className="w-full">
                    <Link to={props.link} className="text-[16px] font-[600] link underline">
                    SHOP NOW
                    </Link>
                </div>
            </div>

        </div>
    )
}