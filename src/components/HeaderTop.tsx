import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block ">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* icons */}
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top_icon_wrapper">
              <AiOutlineInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <FaLinkedin />
            </div>
          </div>
          {/* free shipping */}
          <div className="text-gray-500 text-[12px]">
            <b> FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>
          {/* usd dropdown */}
          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="currency"
              id="currency">
              <option value="USD">$USD</option>
              <option value="EUR">€EUR</option>
              <option value="TK">৳TK</option>
            </select>
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language">
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
