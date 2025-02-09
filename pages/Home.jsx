import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
    <section className="relative w-full h-screen flex items-center px-6 md:px-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-right lg:bg-[length:65%_auto]"
        style={{ backgroundImage: "url('../assets/Africa (1).png')" }}
      ></div>
      <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6 bg-white/80 md:bg-transparent p-6 md:p-10 rounded-xl">
      <h1 className="font-bold text-5xl md:text-7xl leading-[1]">
        <span className="text-black">waste to</span><br /> 
        <span className="text-[#41932A] font-bold">paper.</span>
      </h1>

        <div className="flex flex-wrap gap-15">
          <Button text="Learn More" size="md" />
          <Button text="Buy Now" size="md" />
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-md">
          Empowering Eco-Friendly Work Culture through Sustainable Paper Solutions.
        </p>
      </div>
    </section>
    <section className="w-full h-38 flex items-center justify-center bg-cover bg-center text-white text-2xl font-bold"
        style={{ backgroundImage: "url('../assets/download (5).jpg')" }}
        >
          <h1 className='text-4xl text-center'>Your journey to <br />
          Sustainable Paper</h1>
    </section>
    <section className="w-full min-h-screen flex flex-col items-center px-4 md:px-12 mt-20">
      <div className="w-full flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[4px_4px_5px_rgba(0,0,0,0.4)]">
          What is Kaagazz
        </h1>
        <h2 className="text-lg md:text-2xl font-light max-w-2xl">
          Kaagazz is a dream to have forests full of trees and roads free of filth.
        </h2>
        <h2 className="text-lg md:text-2xl font-light max-w-2xl">
          Kaagazz is a promise to treat all with respect and care.
        </h2>
        <h2 className="text-lg md:text-2xl font-light max-w-2xl">
          Kaagazz is an experience of finest Indian tree-free paper.
        </h2>
      </div>
  <div className="w-full flex flex-col items-center text-center gap-6 mt-12 md:mt-20">
    <p className="text-base md:text-xl font-light w-full max-w-3xl leading-relaxed px-4">
      Kaagazz is a social enterprise founded by DTU alumni. We have created Premium Paper Products for Arts and Industries alike. Through its innovative production technology, Kaagazz works for social security of disabled and marginalized sections by providing them employment in the sustainability sector.
    </p>
    <section className="w-full p-6 md:p-12">
  <div className="w-full text-center mb-6">
    <h2 className="text-4xl font-bold">Kaagazz Till Now</h2>
  </div>
  <div className="w-full flex gap-6 overflow-x-auto md:overflow-visible md:flex-nowrap flex-wrap">
    <div className="w-full md:w-1/3 min-w-[280px] bg-gray-100 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-semibold">Card 1 Title</h3>
      <p className="text-gray-600">Subtitle here</p>
      <img src="your-image-url.jpg" alt="Card 1" className="w-full h-40 object-cover my-4 rounded-lg" />
      <div className="h-10"></div> {/* Empty space */}
    </div>

    {/* Card 2 */}
    <div className="w-full md:w-1/3 min-w-[280px] bg-gray-100 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-semibold">Card 2 Title</h3>
      <p className="text-gray-600">Subtitle here</p>
      <img src="your-image-url.jpg" alt="Card 2" className="w-full h-40 object-cover my-4 rounded-lg" />
      <div className="h-10"></div> {/* Empty space */}
    </div>

    {/* Card 3 */}
    <div className="w-full md:w-1/3 min-w-[280px] bg-gray-100 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-semibold">Card 3 Title</h3>
      <p className="text-gray-600">Subtitle here</p>
      <img src="your-image-url.jpg" alt="Card 3" className="w-full h-40 object-cover my-4 rounded-lg" />
      <div className="h-10"></div> {/* Empty space */}
    </div>
  </div>
</section>
    <Button text="Learn More" size="md" />
  </div>
    </section>
    <section className='bg-black text-white w-full flex flex-col items-center justify-center'>
      <div className='w-full flex flex-col items-center justify-center gap-6 p-6 md:p-12'>
        <h1>IMPACT OF KAAGAZZ</h1>
        <img src="../assets/download (3) 1.png" alt="kaagazz" />
        <h1>Forgotten Childhood</h1>
        <h3>The Saddest Part Of India</h3>
      </div>
      <div className='w-full flex items-center justify-center gap-6 p-6 md:p-12'>
        <h1>
        "Kaagazz transforms the lives of ragpicker and homeless children by providing them with meaningful employment, turning discarded paper into a brighter future—one page at a time."
        </h1>
        <img src="../assets/download (5) 2.png" alt="kaagazz" />
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold uppercase">
      Sanitation for all
    </h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 mx-auto">
  <div className="w-full md:w-1/2 hidden md:block">
    <img 
      src="../assets/sanitation.png" 
      alt="Sanitation" 
      className="w-full h-auto object-cover"
    />
  </div>
  <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center gap-6">
    <img 
      src="../assets/sanitaion2.png" 
      alt="WasteManagement"
      className="w-full h-auto object-cover"
    />
    <p className="text-lg md:text-xl leading-relaxed">
      We have overturned the waste problem of urban landscapes into a scalable solution. We care for humans and animals that have suffered from the filth that decays around ourselves.
    </p>
  </div>
  </div>
  <div className="w-full flex flex-col text-white items-center justify-center gap-6 p-6 md:p-12">
    <h1>NO To Deforestation</h1>
    <img src="../assets/trees.png" alt="none" />
    <p className="text-lg md:text-xl leading-relaxed text-center font-thin">
    We create tree-free carbon neutral and chemical free paper using our patentable technology. This is key to our fight against global issues like climate change and greenhouse gas emissions. We create tree-free carbon neutral and chemical free paper using our patentable technology. This is key to our fight against global issues like climate change and greenhouse gas emissions. 
    </p>
  </div>
    </section>
    <section className='w-full bg-white flex flex-col items-center justify-center gap-6 p-6 md:p-12'>
      <h1 className='text-4xl font-light'>Why Choose KAAGAZZ</h1>
      <div className='flex w-full'>
        <div className='w-1/2 flex flex-col items-center justify-center gap-6'>
          <img src="../assets/landingPage_2.jpeg" alt="none" />
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center gap-6 p-30'>
          <h1 className='text-5xl font-thin'>
          Handcrafted with care, transforming waste into premium sustainable paper.
          </h1>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='w-1/2 flex flex-col items-center justify-center gap-6 p-30'>
          <h1 className='text-5xl font-thin'>
          Crafted with precision for superior quality, using sustainable, recycled materials.
          </h1>
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center gap-6'>
          <img src="../assets/landingPage_3.jpeg" alt="none" />
        </div>
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-6'>
      <h1 className='text-5xl font-thin'>
          Check Out our Products
          </h1>
          <Button text="Buy Now" size="md" />
      </div>
    </section>
    </>
  );
};

export default Home;
