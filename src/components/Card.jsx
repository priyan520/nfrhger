import React from "react";
import { FaStar } from "react-icons/fa";
const Card = () => {
  return (
    <section className="product py-[70px]">
      <div className="container_custom px-[250px]">
        <div className="con ">
            <div className="headding mb-[40px]">
            <h1 className="font-[600] text-[35px] text-center">Being Eco Friendly is not a choice anymore</h1>
            </div>
         <div className="flex flex-wrap gap-20 justify-center">
         <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden ">
              <div className="img">
                <img
                  src={require("../asset/a1.png")}
                  className="h-[450px] w-[350px] object-cover"
                  alt=""
                />
             
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden ">
              <div className="img">
                <img
                  src={require("../asset/a2.png")}
                  className="h-[450px] w-[350px]"
                  alt=""
                />
             
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden ">
              <div className="img">
                <img
                  src={require("../asset/a3.png")}
                  className="h-[450px] w-[350px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        
         </div>
        
     
        </div>
      </div>
    </section>
  );
};

export default Card;
