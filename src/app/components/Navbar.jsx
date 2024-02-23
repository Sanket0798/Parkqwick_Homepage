import Link from "next/link";
import React from "react";

const Navbars = () => {
  return (
    <>
      <div className="text-white flex items-center justify-around w-full h-[75px]">
        <div>
          <p className="font-bold text-inherit">ACME</p>
        </div>
        <div className="flex gap-9 w-[600px] items-center justify-center">
          <Link className="text-gray-500 hover:text-white" href="#">
            How it Works
          </Link>
          <Link className="text-gray-500 hover:text-white" href="#">
            Features
          </Link>
          <Link className="text-gray-500 hover:text-white" href="#">
            About Us
          </Link>
          <Link className="text-gray-500 hover:text-white" href="#">
            Resources
          </Link>
          <Link className="text-gray-500 hover:text-white" href="#">
            Blog
          </Link>
        </div>
        <div>
          <button className="border w-[150px] h-[35px] rounded-full border-gray-500 bg-gray-800 hover:bg-slate-600">
            Start free trial
          </button>
        </div>
      </div>
      <div>
        <hr className="bg-white opacity-40" />
      </div>
    </>
  );
};

export default Navbars;
