import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {
    return (
        <>
            <div>
                <div className="contaner">
                    <div className="con">
                        <img src={require("../asset/slider1.png")} alt="" />
                    </div>
                </div>
            </div>
        </>        
    )
}

export default Slider