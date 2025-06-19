import React from 'react';

const Pg4 = () => {
  return (
    <div className="bg-white w-full pt-16 pb-16  px-4 flex flex-col justify-center">
      {/* Outer Container */}
      <div className="w-full flex flex-col items-center text-center mb-[3rem] ">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Get your business to grow fast
        </h1>

        {/* Paragraph */}
        <p className="text-sm text-black max-w-xl mb-8">
          Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>

        {/* Button */}
        <button className="flex items-center border border-purple-600 text-purple-700 bg-white text-sm px-5 py-2 rounded-full hover:bg-purple-50 transition">
          View Product Tour
        </button>

      </div>
      <div className="flex flex-col md:flex-row w-full bg-white px-6 py-16 items-center justify-center ">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        {/* Mobile Image */}
        <img 
          src="/Col1.png" 
          alt="Mobile" 
          className="block md:hidden w-full max-w-sm object-cover" 
        />
        {/* Desktop Image */}
        <img 
          src="/Col.png" 
          alt="Desktop" 
          className="hidden md:block w-full max-w-lg object-cover" 
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-10 md:mt-[-4rem]">
        
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
      </div>
    </div>
    </div>
  );
};

export default Pg4;
