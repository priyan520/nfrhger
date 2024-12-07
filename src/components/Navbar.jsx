import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
   <section className='nav py-6 px-6'>
        <div className="contaimer_custom">
            <div className="con flex items-center justify-between">
                <div className="logo">
                    <img src={require("../asset/Group 2.png")}  height={"75px"} className='h-[75px]' alt="" />
                </div>
                <nav>
                    <ul className='flex'>
                        <li><a href="" className='px-7 text-[20px]' >Home</a></li>
                        <li><a href="" className='px-7 text-[20px]' >About Us</a></li>
                        <li><a href="" className='px-7 text-[20px]' >Services</a></li>
                        <li><a href="" className='px-7 text-[20px]' >Blog</a></li>
                        <li><a href="" className='px-7 text-[20px]' >Contact Us</a></li>
                    </ul>
                </nav>
                <div className="button flex gap-8">
                    <button><CiShoppingCart className='text-[30px]' /></button>
                    <button><CgProfile className='text-[30px]' /></button>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Navbar