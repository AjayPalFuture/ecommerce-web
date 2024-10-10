import React from "react";
import BannerImg from "../assets/women2.jpg";
import {GrSecure} from "react-icons/gr";
import {IoFastFood} from "react-icons/io5";
import {GiFoodTruck} from "react-icons/gi";

const Banner=()=>{
    return(
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">

             <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
                    <div data-aos="zoom-in">
                        <img src={BannerImg} alt="" 
                        className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>
                    </div>

                    <div className="flex
                    flex-col justify-center gap-6 sm:pt-0">
                        <h1 className="text-3xl sm:4xl font-bold"> Winter Sale upto 50% off</h1>
                        <p className="text-sm text-gray-500  tracking-wide leading-5">
                        Discover unbeatable deals on our winter collection with our Winter Clearance Sale! Whether you're hunting for stylish outerwear, snug sweaters, or chic accessories, we've slashed prices on everything you need to stay warm and fashionable this season.
                        </p>
                        <div className=" flex flex-col gap-4">
                            <div data-aos="fade-up" className="flex  items-center gap-4">
                                <GrSecure
                                className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                                <p>Quality Product</p>
                            </div>
                            <div data-aos="fade-up"className="flex items-center gap-4">
                                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                                 <p>Fast Delivery</p>
                            </div>

                            <div data-aos="fade-up"className="flex items-center gap-4">
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                                 <p>Get Offers</p>
                            </div>
                        </div>
                    </div>

                </div>

             </div>
        </div>
    )
}
export default Banner;