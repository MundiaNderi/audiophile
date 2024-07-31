import React, { useContext } from "react";
import StoreContext from '../../context/StoreContext'


const CartModal = () => {
     const [ cartItems, audio_list, removeCart] = useContext(StoreContext)
    return (
        <div>
            {/*Mark II */}
            <div className=" flex flex-col md:mb-96 p-6 card  rounded-md bg-white">
                <h1 className=" font-manrope font-bold ">SUMMARY</h1>
                <div className="flex my-3 justify-between">
                    <div className="flex">
                        <img
                            className="w-16 h-16"
                            src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                        />
                        <div className="flex flex-col ml-4">
                            <p className="pr-2 text-sm font-manrope font-bold leading-6 ">
                                XX99 MK II
                            </p>
                            <p className="text-sm font-manrope leading-6 text-solidBlack">
                                $ 2,999
                            </p>
                        </div>
                    </div>
                    <p className=" text-sm font-manrope leading-6 text-solidBlack">x1</p>
                </div>

                {/*HeadPhones */}
                <div className="flex my-3 justify-between">
                    <div className="flex">
                        <img
                            className="w-16 h-16"
                            src="/assets/cart/image-xx59-headphones.jpg"
                        />
                        <div className="flex flex-col ml-4">
                            <p className=" text-sm font-manrope font-bold leading-6 ">XX59</p>
                            <p className=" text-sm font-manrope leading-6 text-solidBlack">
                                $ 899
                            </p>
                        </div>
                    </div>
                    <p className=" text-sm font-manrope leading-6 text-solidBlack">x1</p>
                </div>

                {/*HeadPhones */}
                <div className="flex my-3 justify-between">
                    <div className="flex">
                        <img
                            className="w-16 h-16"
                            src="/assets/cart/image-yx1-earphones.jpg"
                        />
                        <div className="flex flex-col ml-4">
                            <p className="text-sm font-manrope font-bold leading-6 ">YX1</p>
                            <p className="text-sm font-manrope leading-6 text-solidBlack">
                                $ 599
                            </p>
                        </div>
                    </div>
                    <p className="text-sm font-manrope leading-6 text-solidBlack">x1</p>
                </div>

                {/** */}
                <div>
                    <div className="flex justify-between">
                        <p className="font-manrope text-sm leading-6">TOTAL</p>
                        <p className="text-sm font-bold font-manrope">$ 5,396</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-manrope text-sm leading-6">SHIPPING</p>
                        <p className="text-sm font-bold font-manrope">$ 50</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-manrope text-sm leading-6">VAT (INCLUDED)</p>
                        <p className="text-sm font-bold font-manrope">$ 1,079</p>
                    </div>
                    <div className="flex py-4 justify-between">
                        <p className="font-manrope text-sm leading-6">GRAND TOTAL</p>
                        <p className="text-sm font-bold font-manrope text-burntSienna">
                            $ 5,446
                        </p>
                    </div>
                </div>
                <button className="text-white text-sm bg-burntSienna p-3 font-manrope">
                    CONTINUE & PAY
                </button>
            </div>
        </div>
    );
};

export default CartModal;
