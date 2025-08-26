import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Like = () => {
  const [isheart, setIsheart] = useState(false);

  const Heart = () => {
    setIsheart((newVal) => {
      return !newVal;
    });
  };

  return (
    <div>
      <p onClick={Heart} className="bg-reg">
        {isheart ? (
          <FaHeart className="text-red-600 hover:scale-[5]" />
        ) : (
          <FaRegHeart />
        )}
      </p>
    </div>
  );
};

export default Like;
