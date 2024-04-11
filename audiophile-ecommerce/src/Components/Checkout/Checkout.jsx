import React from "react";

const Checkout = () => {
  return (
    <div className="px-6 md:px-32">
      <p className="">
        {/* Add a link or button to go back */}
        <a href="#">Go back</a>
      </p>
      <h1 className="font-manrope text-2xl py-5 font-bold ">CHECKOUT</h1>
      <div className=" flex flex-col md:flex-row ">
        {/* Checkout Form */}
        <div className="w-full md:w-3/4">
          <h2 className="font-manrope text-lg py-3 font-bold text-burntSienna">
            BILLING DETAILS
          </h2>
          <form>
            <div className="flex ">
              <div className="mb-4 w-full pr-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Alexei Ward"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="alexeiward@mail.com"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 202-555-0136"
                className="mt-1 p-2 border rounded-md w-full"
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
                className="block text-sm font-medium text-gray-700"
              >
                Your Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="1137 Williams Avenue"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="flex">
              <div className="mb-4 w-full pr-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip code"
                  name="zip code"
                  placeholder="10001"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </div>
            <div className="mb-4 w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="United States"
                className="mt-1 p-2 border rounded-md w-full"
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
                <p>Payment Method</p>
              </div>
              <div className="flex flex-col">
                <ul class="tickable-list">
                  <li>
                    <span class="tick"></span> e-Money
                  </li>
                  <li>
                    <span class="tick"></span> Cash on
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mb-4 w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  e-Money Number
                </label>
                <input
                  type="text"
                  id="emoney number"
                  name="emoney"
                  placeholder="238521993"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4 w-1/2 pl-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  e-Money PIN
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="6891"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* Summary Section (if needed) */}
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
