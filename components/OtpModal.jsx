import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const OtpModal = ({ isOpen, onClose, onVerify }) => {
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  if (!isOpen) return null; // Hide modal when not open

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      setIsVerified(true); // Set success message
      onVerify(otp); // Call parent function
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  useEffect(() => {
    if (isVerified) {
      setTimeout(() => {
        navigate("/home"); // Redirect to Home.jsx after 3 seconds
      }, 3000);
    }
  }, [isVerified, navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {!isVerified ? (
          <>
            <h2 className="text-xl font-bold text-center">Enter OTP</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                placeholder="Enter OTP"
                className="w-full border p-2 rounded-md text-center text-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition"
              >
                Verify OTP
              </button>
            </form>
            <button
              className="mt-4 text-blue-500 w-full text-center"
              onClick={onClose}
            >
              Close
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-600">✅ Verification Successful!</h2>
            <p className="text-gray-600 mt-2">Redirecting to Home...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtpModal;
