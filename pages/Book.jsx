import CustomButton from "/components/Button";
import comingSoonImage from "/images/book.jpeg"; 

const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5efe6] mt-10 p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-[#fdf8f1] shadow-lg rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <img src={comingSoonImage} alt="Coming Soon" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Book Publishing Service</h2>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">This service will be available soon</h4>
          <p className="text-gray-600 text-lg mb-6">We are working on bringing you an exclusive book publishing service. Stay tuned for updates!</p>
          <CustomButton text="Notify Me" className="bg-black text-white hover:opacity-80 rounded-xl py-2 px-6" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
