import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full bg-black text-white">
        <div className=" grid grid-cols-2 md:grid-cols-4 py-10 pl-6">
          <div>
            <h2 className=" font-bold mb-3 text-[20px] md:text-[25px]">
              Yumi<span className="text-[#fbc531]">Food</span>
            </h2>
            <p className=" text-[20px] text-[gray]">
              @2024 Adnan Technology Pvt. Ltd
            </p>
          </div>

          <div>
            <h2 className=" font-bold mb-3 text-[20px] md:text-[25px]">
              Company
            </h2>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">About</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">
              Careers
            </p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Team</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">
              YumiMART
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-3 text-[20px] md:text-[25px]">
              Help & Support
            </h2>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">
              Contact Us
            </p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">
              Partner with us
            </p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">
              Ride with us
            </p>
          </div>
          <div>
            <h2 className=" font-bold mb-3 text-[20px] md:text-[25px]">
              We deliver to:
            </h2>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">
              Banglore
            </p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Delhi</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Patna</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">
              Mumbai
            </p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">
              Kolkata
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
