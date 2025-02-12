import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""; // Get email from Signup page
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!email) {
      navigate("/signup"); // Redirect to signup if no email is found
    }
  }, [email, navigate]);

  // Handle OTP input
  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  // Resend OTP
  const resendOtp = async () => {
    try {
      await axios.post("http://localhost:4002/user/sendotp", { email });
      setMessage("OTP sent again successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to resend OTP.");
    }
  };

  // Verify OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post("http://localhost:4002/user/login", { email, otp });

      if (response.status === 200) {
        localStorage.setItem("userToken", response.data.userToken); // Store token
        navigate("/otp-status", { state: { success: true } }); // Navigate to status page
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid OTP.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">OTP Verification</h2>
        {message && <p className="text-green-500 text-center mt-2">{message}</p>}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-600">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter the OTP sent to your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
          >
            Verify OTP
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Didn't receive OTP?
          <button onClick={resendOtp} className="text-blue-500 hover:underline ml-1">
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
