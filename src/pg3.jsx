import React from 'react';

const Pg3 = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center md:py-16 px-4" id="pg3-main">
      {/* Content Wrapper */}
      <div className="mx-[4rem] text-center  w-full">
        {/* Caption / Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Find similar stories
        </h1>

        {/* Paragraph */}
        <p className="text-sm text-black">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus
          quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum
          etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row py-12 lg:py-16 lg:ml-[0.5rem] mr-[0rem] h-auto lg:h-[32rem] w-[95%]">
            {/* Image Section */}
            <img
                src="/Picturee.png"
                alt="loading"
                className="
                w-full h-[18rem] object-cover lg:h-[25rem] lg:w-[45rem]
                lg:absolute lg:left-0
                "
            />

            {/* Content Box */}
            <div
                className="
                bg-white border border-gray-200 shadow-2xl z-10
                w-[90%] max-w-[33rem] mx-auto mt-[-2.5rem] px-6 py-6
                lg:absolute lg:w-[33rem] lg:h-[18rem] lg:ml-[39rem] lg:mr-[10rem]
                lg:top-[9.5rem] lg:px-[3rem] lg:pt-[4rem]
                "
            >
                {/* Heading */}
                <h1 className="text-[1.1rem] font-bold text-gray-600 mb-4 uppercase tracking-widest">
                ARTIST & INVESTOR
                </h1>

                {/* Paragraph */}
                <p className="text-sm text-black mb-6">
                Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor.
                Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...
                </p>

                {/* Button */}
                <button className="flex items-center w-[9.3rem] bg-white text-purple-700 text-sm pl-3 pr-2 py-[0.4rem] mt-[2.5rem] rounded-full hover:bg-purple-50 transition">
                Read Full Story
                <img src="/arrow-right-purp.png" alt="arrow" className="h-4 w-4 mt-[0.25rem] ml-3" />
                </button>
            </div>
        </div>
      <div>
        <img src="Slider Cues.png" alt="loading" className='w-20 h-2' />
      </div>
    </div>
  );
};

export default Pg3;
