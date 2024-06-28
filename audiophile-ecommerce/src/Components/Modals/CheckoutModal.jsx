import React, { useState } from "react";
import XX99 from "../../../public/assets/cart/image-xx99-mark-one-headphones.jpg";
import XX59 from '../../../public/assets/cart/image-xx59-headphones.jpg'
import PlusSvg from "../../../public/assets/checkout/+.svg";
import MinusSvg from "../../../public/assets/checkout/-.svg";
import YX1 from '../../../public/assets/cart/image-yx1-earphones.jpg'
import { Link } from "react-router-dom";

const CheckoutModal = () => {
    const [itemCount, setItemCount] = useState(1);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl pr-40 font-semibold">Cart (3)</h1>
                    <p className="text-burntSienna cursor-pointer">Remove all</p>
                </div>

                <div className="flex justify-between items-center  mb-4">

                    <div className="flex ">
                        <img src={XX99} className="w-16 h-16 rounded" alt="XX99 Headphones" />
                        <div className=" items-start pl-4 ">
                            <p className="font-medium leading-6">XX99 MK II</p>
                            <p className="text-gray-500">$2,999</p>
                        </div>
                    </div>
                    <div>
                        <button className="flex px-2 bg-lightGray items-center">
                            <img
                                onClick={() => setItemCount((prev) => Math.max(prev - 1, 1))}
                                src={MinusSvg}
                                className="cursor-pointer"
                                alt="Decrease"
                            />
                            <p className="mx-4">{itemCount}</p>
                            <img
                                onClick={() => setItemCount((prev) => prev + 1)}
                                src={PlusSvg}
                                className="cursor-pointer"
                                alt="Increase"
                            />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between  mb-4">

                    <div className="flex">
                        <img src={XX59} className="w-16 rounded" alt="XX99 Headphones" />
                        <div className=" items-star pl-4">
                            <p className="font-medium leading-6">XX59</p>
                            <p className="text-gray-500">$899</p>
                        </div>
                    </div>
                    <div>
                        <button className="flex px-2 bg-lightGray items-center">
                            <img
                                onClick={() => setItemCount((prev) => Math.max(prev - 1, 1))}
                                src={MinusSvg}
                                className="cursor-pointer"
                                alt="Decrease"
                            />
                            <p className="mx-4">{itemCount}</p>
                            <img
                                onClick={() => setItemCount((prev) => prev + 1)}
                                src={PlusSvg}
                                className="cursor-pointer"
                                alt="Increase"
                            />
                        </button>
                    </div>

                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                        <img src={YX1} className="w-16 rounded" alt="XX99 Headphones" />
                        <div className=" items-start pl-4">
                            <p className="font-medium leading-6 ">YXI</p>
                            <p className="text-gray-500">$599</p>
                        </div>
                    </div>
                    <div>
                        <button className="flex px-2 bg-lightGray items-center">
                            <img
                                onClick={() => setItemCount((prev) => Math.max(prev - 1, 1))}
                                src={MinusSvg}
                                className="cursor-pointer"
                                alt="Decrease"
                            />
                            <p className="mx-4">{itemCount}</p>
                            <img
                                onClick={() => setItemCount((prev) => prev + 1)}
                                src={PlusSvg}
                                className="cursor-pointer"
                                alt="Increase"
                            />
                        </button>
                    </div>


                </div>
                <Link to='/checkout'>
                    <button className="bg-burntSienna text-white p-3 w-full hover:bg-mellowApricot">
                        CHECKOUT
                    </button>
                </Link >

            </div>
        </div>
    );
};

export default CheckoutModal;
