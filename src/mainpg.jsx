import React from 'react';

const Mainpg = () => {
  return (
    <div className="relative bg-white w-full py-6 flex flex-col justify-center items-center overflow-hidden md:min-h-[72rem] min-h-[37rem] ">

      {/* Left Image with custom top/bottom spacing */}
      <img
        src="/Ellipses.png"
        alt="left"
        className="absolute left-0 top-[18rem] md:top-[9.4rem] h-[15rem] md:h-[40rem]"
      />

      {/* Right Image with different top/bottom spacing */}
      <img
        src="/Ellipses1.png"
        alt="right"
        className="absolute right-0 top-[17.5rem] md:top-[16rem] h-[15rem] md:h-[45rem]"
      />

      {/* Centered Text Content */}
      <div className="flex flex-col justify-center items-center text-center max-w-2xl px-4 bg-white bg-opacity-80 p-6 rounded-xl z-10 absolute top-16">
        <h1 className="text-black text-[1.75rem] md:text-[3rem] font-bold mb-4 leading-tight">
          All your ideas in one place
        </h1>
        <p className="text-black text-[0.85rem] md:text-sm mb-6 w-[95%]">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
        <button className="flex bg-purple-700 text-[0.85rem] md:text-[0.95rem] text-white pl-5 pr-3 py-[0.35rem] md:pl-6 md:py-[0.4rem] rounded-full hover:bg-purple-800 transition">
          Start for free
          <img src="/arrow-right.png" alt="arrow" className='h-4 w-4 mt-[0.2rem] ml-4' />
        </button>
      </div>

      {/* Bottom Image */}
      <div className="z-10 mt-[17rem] md:mt-[20rem]">
        <img
          src="/Bottom.png"
          alt="loading"
          className="h-[19rem] w-[90%] md:h-[45rem] md:w-[60.2rem] ml-5 md:ml-6"
        />
      </div>
      <div className="w-full h-px bg-gray-300 absolute bottom-0" />
    </div>
  );
};

export default Mainpg;
