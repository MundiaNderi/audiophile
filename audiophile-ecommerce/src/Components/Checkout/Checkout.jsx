import React from "react";

const Checkout = () => {
  return (
    <div className="px-6  md:flex-row  py-10 bg-lightGray md:px-32">
      <p className="pb-10">
        {/* Add a link or button to go back */}
        <a className="font-manrope hover:text-burntSienna " href="#">
          Go Back
        </a>
      </p>
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="bg-white md:w-3/4 rounded-md p-6">
          <h1 className="font-manrope text-2xl py-5 font-bold ">CHECKOUT</h1>
          <div className=" flex flex-col md:flex-row ">
            {/* Checkout Form */}
            <div className="w-full">
              <h2 className="font-manrope text-lg py-3 font-bold text-burntSienna">
                BILLING DETAILS
              </h2>
              <form>
                <div className="flex ">
                  <div className="mb-4 w-full pr-4">
                    <label
                      htmlFor="name"
                      className="block font-manrope text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Alexei Ward"
                      className="mt-1 p-2 font-manrope border rounded-md w-full"
                      required
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-manrope font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="alexeiward@mail.com"
                      className="mt-1 p-2 font-manropeb border rounded-md w-full"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium font-manrope text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 202-555-0136"
                    className="mt-1 p-2 border font-manrope rounded-md w-full"
                    required
                  />
                </div>
              </form>

              {/*Shipping Information */}
              <h2 className="font-manrope py-4 font-bold text-burntSienna text-lg pt-5 ">
                SHIPPING INFO
              </h2>
              <form>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="email"
                    className="block font-manrope text-sm font-medium text-gray-700"
                  >
                    Your Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="1137 Williams Avenue"
                    className="mt-1 font-manrope p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="flex">
                  <div className="mb-4 w-full pr-4">
                    <label
                      htmlFor="email"
                      className="block font-manrope text-sm font-medium text-gray-700"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip code"
                      name="zip code"
                      placeholder="10001"
                      className="mt-1 font-manrope p-2 border rounded-md w-full"
                      required
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="email"
                      className="block font-manrope text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="New York"
                      className="mt-1 p-2 border font-manrope rounded-md w-full"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-manrope font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="United States"
                    className="mt-1 p-2 font-manrope border rounded-md w-full"
                    required
                  />
                </div>
              </form>

              {/*Payment detals */}
              <div>
                <div>
                  <h2 className="font-manrope py-5 font-bold text-burntSienna ">
                    PAYMENT DETAILS
                  </h2>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-manrope font-bold">Payment Method</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex border  mt-2 p-2 px-5 hover:border-burntSienna rounded-md items-center">
                      <input
                        type="radio"
                        id="html"
                        name="money"
                        value="e-Money"
                        className="form-radio font-manrope text-gray-600 border-gray-300 focus:to-burntSienna "
                      />
                      <label className="pl-2 font-manrope" htmlFor="html">
                        e-Money
                      </label>
                      <br />
                    </div>
                    <div className="flex border mt-2 p-2 px-5 rounded-md hover:border-burntSienna items-center ">
                      <input
                        type="radio"
                        id="cash-delievery"
                        name="cash"
                        value="CSS"
                      />
                      <label className="pl-2 font-manrope" htmlFor="css">
                        Cash on Delivery
                      </label>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="flex py-3 flex-row">
                  <div className="mb-4 w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-manrope font-medium text-gray-700"
                    >
                      e-Money Number
                    </label>
                    <input
                      type="text"
                      id="emoney number"
                      name="emoney"
                      placeholder="238521993"
                      className="mt-1 p-2  font-manrope border rounded-md w-full"
                      required
                    />
                  </div>
                  <div className="mb-4 w-1/2 pl-4">
                    <label
                      htmlFor="email"
                      className="block font-manrope text-sm font-medium text-gray-700"
                    >
                      e-Money PIN
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="6891"
                      className="mt-1 p-2 font-manrope border rounded-md w-full"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <img className="w-12 h-12 pr-4 " src='/assets/checkout/icon-cash-on-delivery.svg' />
                  <p className=" text-sm font-manrope font-solidBlack leading-6">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section (if needed) */}

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
                <p className="pr-2 text-sm font-manrope font-bold leading-6 ">XX99 MK II</p>
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
                <p className=" text-sm font-manrope leading-6 text-solidBlack">$ 899</p>
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
                <p className="text-sm font-manrope leading-6 text-solidBlack">$ 599</p>
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
              <p className="text-sm font-bold font-manrope text-burntSienna">$ 5,446</p>
            </div>
          </div>
          <button className="text-white text-sm bg-burntSienna p-3 font-manrope">
            CONTINUE & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
