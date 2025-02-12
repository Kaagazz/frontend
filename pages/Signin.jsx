import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1: Enter Email, Step 2: Enter OTP
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Handle OTP input change
  const handleOtpChange = (e) => setOtp(e.target.value);

  // Handle email submission (Send OTP)
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://backend-zgo4.onrender.com/user/sendotp", { email });

      if (response.status === 200) {
        setStep(2); // Move to OTP verification step
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send OTP. Try again!");
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4002/user/login", { email, otp });

      if (response.status === 200) {
        // Store token in localStorage
        localStorage.setItem("authToken", response.data.userToken);

        // Redirect to dashboard or home page
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid OTP! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {step === 1 ? "Sign In" : "Verify OTP"}
        </h2>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        {step === 1 ? (
          // Step 1: Enter Email
          <form onSubmit={handleSendOtp} className="mt-6">
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          // Step 2: Enter OTP
          <form onSubmit={handleVerifyOtp} className="mt-6">
            <div>
              <label className="block text-gray-600">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter OTP"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600 transition"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?
          <a href="/sign-up" className="text-blue-500 hover:underline"> Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
