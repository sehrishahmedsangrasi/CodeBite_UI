import React from 'react';

const Pg5 = () => {
  return (
  <div
    className="w-full h-[30rem] bg-center flex items-center justify-center text-center px-4 
                bg-none md:bg-[url('/Section.png')] md:bg-cover"
    >
      {/* Optional: Dark Overlay */}
      

      {/* Content */}
      <div className="w-full md:w-1/2 flex pt-16 md:pb-0 pb-[22rem] bg-[#f1f5f9] md:bg-transparent flex-col justify-center text-center px-4 md:text-left md:pl-10 md:pr-[6rem] md:mt-[-8rem] absolute left-0">
        
        {/* Small Gray Subheading */}
        <h4 className="text-[0.9rem] text-gray-500 mb-2 font-bold tracking-widest">NO LIMITS</h4>

        {/* Large Bold Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Unlimited ideas for your projects
        </h1>

        {/* Paragraph */}
        <p className="text-sm text-black mt-[1rem]">
          Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
          Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
        </p>
        <button className="flex ml-[8rem] md:ml-0 bg-purple-700 text-[0.95rem] mt-[1.5rem] text-white px-6 w-[38%] md:w-[29%] py-[0.4rem] rounded-full hover:bg-purple-800 transition shadow-lg">
            Start for free
            </button>
      </div>
      <img src="/Frame.png" alt="loading" className='block md:hidden z-10 mt-[24rem]' />
    </div>
  );
};

export default Pg5;
