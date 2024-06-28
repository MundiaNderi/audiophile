import Tick from "../../../public/assets/checkout/tick.svg";
import XX99 from "../../../public/assets/cart/image-xx99-mark-two-headphones.jpg";
import XX59 from "../../../public/assets/cart/image-xx59-headphones.jpg";
import YX1 from "../../../public/assets/cart/image-yx1-earphones.jpg";

const ThankyouModal = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg  py-6 p-8 max-w-md w-full">
        <div className=" mb-8 items-center">
          <img src={Tick} alt="Tick sign" className="w-16 h-16  mb-4" />
          <h2 className="text-2xl font-bold leading-8  text-black">
            THANK YOU FOR YOUR ORDER
          </h2>
          <p className=" text-charcoalGray font-medium mt-2">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="flex">
          <div className="flex flex-col w-1/2 bg-gray-300 rounded-l-lg  overflow-hidden">
            <div className="flex py-2 md:py-4 px-4 mb-3">
              <img
                src={XX99}
                alt="XX99 headphones"
                className="w-12 h-12 rounded-lg"
              />
              <div className="flex-1 ml-2">
                <p className="font-semibold leading-6 font-manrope">XX99 MK II</p>
                <p className="font-manrope text-charcoalGray leading-6">$ 2,999</p>
              </div>
              <p>x1</p>
            </div>

            <div className="flex py-2 md:py-4 px-4 mb-3">
              <img
                src={XX59}
                alt="XX59 headphones"
                className="w-12 h-12 rounded-lg"
              />
              <div className="flex-1 ml-2 ">
                <p className="font-semibold leading-6 font-manrope">XX59 MK II</p>
                <p className="font-manrope text-charcoalGray leading-6">$ 899</p>
              </div>
              <p>x2</p>
            </div>

            <div className="flex py-2 md:py-4 px-4 mb-3">
              <img
                src={YX1}
                alt="YX1 earphones"
                className="w-12 h-12  rounded-lg"
              />
              <div className="flex-1 ml-2">
                <p className="font-semibold">YX1</p>
                <p className="font-manrope text-charcoalGray leading-6">$ 599</p>
              </div>
              <p>x1</p>
            </div>

            <hr className="mx-4 text-bg-lightGray" />
            <p className="text-gray-600 py-4 text-center">View less</p>
          </div>

          <div className="flex flex-col w-1/2 bg-black text-white rounded-r-lg p-4">
            <div className="flex-1 flex flex-col justify-between">
              <div className=" pt-60">
                <p className="font-semibold text-center text-charcoalGray">GRAND TOTAL</p>
                <p className="text-center">$5,446</p>
              </div>
            </div>
          </div>
        </div>
         <button className="text-white font-manrope bg-burntSienna my-4 w-full py-2 hover:bg-mellowApricot">BACK TO HOME</button>
      </div>
    </div>
  );
};

export default ThankyouModal;
