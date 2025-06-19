// PurpleSection.jsx
import React from 'react';

const PurpleSection = () => {
  return (
    <div className="bg-[#4c1d95] w-full h-[20rem] md:h-[25rem] relative mt-[6rem] md:mt-0">
      <img src="/Ellipse15.png" alt="loading" className='absolute left-0 bottom-0 h-[5rem] w-[10rem] block md:hidden' />
      <img src="/Ellipses15.png" alt="loading" className='absolute left-0 bottom-0 h-[15rem] w-[15rem] md:block hidden' />
      <img src="/Iphones.png" alt="loading" className='absolute right-0 bottom-0  h-[20rem] w-[25rem] md:block hidden' />
      <div className="w-full flex flex-col justify-center items-center text-center px-4 py-14 md:py-24">
      
      {/* Small lavender heading */}
      <h4 className="md:text-sm text-lg text-purple-300 tracking-widest font-semibold mb-1">
        START BUILDING IDEAS
      </h4>

      {/* Main heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-7">
        Brainstorm now!
      </h1>

      {/* Paragraph */}
      <p className="text-white text-sm md:text-base max-w-2xl mb-9">
        Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br />
        Risus elit et fringilla habitant ut facilisi.
      </p>

      {/* Button */}
      <button className="flex bg-[#7c3aed] text-[0.95rem] text-white pl-6 pr-6 py-[0.4rem] rounded-full hover:bg-purple-700 transition">
        Start For Free
      </button>
    </div>
    </div>
    
  );
};

export default PurpleSection;
