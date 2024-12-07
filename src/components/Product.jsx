import React from "react";
import { FaStar } from "react-icons/fa";
const Product = () => {
  return (
    <section className="product py-[70px]">
      <div className="container_custom px-[250px]">
        <div className="con flex flex-wrap gap-20 justify-center">
          <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden ">
              <div className="img">
                <img
                  src={require("../asset/Group 10.png")}
                  className="h-[450px] w-[350px] object-cover"
                  alt=""
                />
                <div className="contont px-4 py-4 pl-1">
                  <div className="star flex gap-2">
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                  </div>
                  <h2 className="mt-2 text-[20px] font-[600]">T-shirt</h2>
                  <p>Men’s Active Shorts</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden ">
              <div className="img">
                <img
                  src={require("../asset/Group 15.png")}
                  className="h-[450px] w-[350px]"
                  alt=""
                />
                <div className="contont px-4 py-4 pl-1 object-cover">
                  <div className="star flex gap-2 object-cover">
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                  </div>
                  <h2 className="mt-2 text-[20px] font-[600] ">Cap</h2>
                  <p>Men’s Active Shorts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden ">
              <div className="img">
                <img
                  src={require("../asset/dfgh 1.png")}
                  className="h-[450px] w-[350px]"
                  alt=""
                />
                <div className="contont px-4 py-4 pl-1">
                  <div className="star flex gap-2">
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                  </div>
                  <h2 className="mt-2 text-[20px] font-[600]">Socks</h2>
                    <p>Men’s socks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden object-cover">
              <div className="img">
                <img
                  src={require("../asset/Group 4.png")}
                  className="h-[450px] w-[350px] object-cover"
                  alt=""
                />
                <div className="contont px-4 py-4 pl-1">
                  <div className="star flex gap-2">
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                  </div>
                  <h2 className="mt-2 text-[20px] font-[600]">T-shirt</h2>
                  <p>Men’s Tshirt</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden ">
              <div className="img">
                <img
                  src={require("../asset/Group 5.png")}
                  className="h-[450px] w-[350px] object-cover"
                  alt=""
                />
                <div className="contont px-4 py-4 pl-1">
                  <div className="star flex gap-2">
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                  </div>
                  <h2 className="mt-2 text-[20px] font-[600]">T-shirt</h2>
                  <p>Men’s socks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="sub_box rounded-[20px] overflow-hidden ">
              <div className="img">
                <img
                  src={require("../asset/generate to football sports wear kit mockup. custom for your design project. without any brand logo 1.png")}
                  className="h-[450px] w-[350px]"
                  alt=""
                />
                <div className="contont px-4 py-4 pl-1">
                  <div className="star flex gap-2">
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                  </div>
                  <h2 className="mt-2 text-[20px] font-[600]">T-shirt</h2>
                  <p>Men’s Tshirt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
