import { useContext } from 'react';
import SteinSpeaker from '/assets/shared/desktop/image-speaker-zx9.png';
import Speaker from '/image-speaker-zx7.jpg'
import Earphones from '/image-earphones-yx1.jpg'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const { productData} = useContext(StoreContext)
  const navigate = useNavigate();

  const zx9  = productData.find((item) => item.slug === "zx9-speaker")
  const zx7  = productData.find((item) => item.slug === "zx7-speaker")
  const yx1  = productData.find((item) => item.slug === "yx1-earphones")
  return (
    <div className='md:mx-32 px-4 flex flex-col  gap-6'>
      <div className='bg-burntSienna flex flex-col md:flex-row items-center justify-center py-4 md:px-24 rounded-md '>
        <div className='items center' >
            <img src={SteinSpeaker} alt='stein speaker' className='h-50 w-80' />
        </div>
        <div className='text-center md:text-left md:pl-24 px-3 ' >
            <h1 className='font-manrope font-bold text-lg py-3 text-white'>ZX9 SPEAKER</h1>
            <p className='text-white font-manrope text-center md:text-left pb-3 '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button 
            onClick={() => navigate(`/product/${zx9._id}`)}
            className='text-white font-manrope bg-black hover:bg-charcoalGray p-2 px-4' > See Product</button>

        </div>
        </div>

        {/*ZX7 Speaker */}
        <div className=' bg-charcoalGray flex flex-row justify-between rounded-md relative '>
          <div className='' >
             <img src={Speaker} alt='' />
          </div>
            <div className='absolute top-4 text-left left-20 md:top-12 ' >
              <h1 className='text-black font-manrope font-bold pb-4 text-xl '>ZX7 SPEAKER</h1>
              <button 
              onClick={() => navigate(`/product/${zx7._id}`)}
              className='text-black font-manrope hover:bg-black hover:text-white bg-gray border border-black p-2 px-4' > See Product</button>
            </div>
        </div>

        {/*YXI Earphones */}
        <div className=' flex flex-col md:flex-row gap-4  ' >
          <div className='rounded-md' >
            <img src={Earphones} className='rounded-md' />
          </div>

          <div className='bg-lightGray rounded-md flex flex-col md:justify-center items-start md:items-center md:px-56 mt-4 py-12 md:py-0 md:mt-0'>
            <h2 className='text-center pl-4 md:pl-0  pb-4'>YXI EARPHONES</h2>
            <button 
            onClick={() => navigate(`/product/${yx1._id}`)}
            className='text-black ml-4 md:ml-0 hover:bg-black hover:text-white font-manrope bg-gray border border-black p-2 px-4' > See Product</button>
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
