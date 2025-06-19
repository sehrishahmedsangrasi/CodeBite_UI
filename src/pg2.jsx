import React from 'react';

const Pg2 = () => {
  return (
    <div className="w-full bg-white py-12 flex flex-col justify-center items-center">
      {/* Main content container */}
      <div className="max-w-7xl w-full px-0 sm:px-[3rem] ">
        {/* Row of 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Div 1 */}
          <div className=" p-6  flex flex-col items-center text-center">
            <img src="/Icon.png" alt="loading" className='h-20 w-20'/>
            <h2 className="text-lg font-bold text-black mb-2">Fermentum amet</h2>
            <p className="text-sm text-gray-700">
              Pellentesque quis tincidunt sit sed. Tortor massa sed habitant.
            </p>
          </div>

          {/* Div 2 */}
          <div className=" p-6  flex flex-col items-center text-center">
            <img src="/Icon1.png" alt="loading" className='h-20 w-20'/>
            <h2 className="text-lg font-bold text-black mb-2">Dignissim quam</h2>
            <p className="text-sm text-gray-700">
              Quam sed neque vitae viverra purus venenatis ac non.
            </p>
          </div>

          {/* Div 3 */}
          <div className="p-6 flex flex-col items-center text-center">
            <img src="/Icon2.png" alt="loading" className='h-20 w-20'/>
            <h2 className="text-lg font-bold text-black mb-2">Dignissim quam</h2>
            <p className="text-sm text-gray-700">
              Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam.
            </p>
          </div>

          {/* Div 4 */}
          <div className="p-6 flex flex-col items-center text-center">
            <img src="/Icon3.png" alt="loading" className='h-20 w-20'/>
            <h2 className="text-lg font-bold text-black mb-2">Risus morbi</h2>
            <p className="text-sm text-gray-700">
              Euismod sed pellentesque ut elementum.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row md:mt-9">
        {/* Left: Image section */}
        <div className="md:w-1/2 w-full pb-2 md:pb-0 md:pr-2">
            <img src="/Picture.png" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Right: Content section */}
        <div className="md:w-1/2 w-full min-h-[30rem] bg-purple-900 flex flex-col justify-center  px-[4rem]">
            <h3 className="text-sm text-purple-300 font-semibold mb-3">Team work</h3>

            <h1 className="text-white text-3xl md:text-5xl font-bold mb-8">
            Easily brainstorm with your team
            </h1>

            <p className="text-white text-sm md:text-base max-w-xl mb-6 px-2">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
            Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
            </p>

            <button className="flex bg-purple-700 text-[0.95rem] text-white px-6 w-[42%]  md:w-[27%] py-[0.4rem] rounded-full hover:bg-purple-800 transition shadow-lg">
            Start for free
            </button>
        </div>
        </div>
        <div className="w-full flex gap-2 py-4">

      {/* === First Section === */}
      <div className="flex w-full">
        {/* Left (70%) */}
        <div className="w-[70%] flex flex-col justify-center pr-2">
            <img src="/Picture1.png" alt="section 1" className="w-full h-[5rem] md:h-[10rem] object-cover " />
        </div>

        {/* Right (30%) */}
        <div className="w-[30%] flex justify-center items-center">
          <img src="/Picture2.png" alt="section 1" className="w-full h-[5rem] md:h-[10rem] object-cover object-top " />
        </div>
      </div>

      {/* === Second Section === */}
      <div className="flex w-full">
        {/* Left (70%) */}
        <div className="w-[70%] flex flex-col justify-center pr-2">
         <img src="/Picture3.png" alt="section 1" className="w-full h-[5rem] md:h-[10rem] object-cover " />
        </div>

        {/* Right (30%) */}
        <div className="w-[30%] flex justify-center items-center">
          <img src="/Picture4.png" alt="section 1" className="w-full h-[5rem] md:h-[10rem] object-cover object-bottom " />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Pg2;
