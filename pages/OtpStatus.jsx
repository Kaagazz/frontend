import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OtpStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const success = location.state?.success || false;

  useEffect(() => {
    setTimeout(() => {
      navigate(success ? "/" : "/login"); // Redirect after 3 sec
    }, 3000);
  }, [success, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg text-center">
        {success ? (
          <h2 className="text-2xl font-bold text-green-600">OTP Verified Successfully! 🎉</h2>
        ) : (
          <h2 className="text-2xl font-bold text-red-600">OTP Verification Failed! ❌</h2>
        )}
        <p className="text-gray-600 mt-4">
          {success
            ? "You are being redirected to your dashboard..."
            : "Redirecting to login page..."}
        </p>
      </div>
    </div>
  );
};

export default OtpStatus;
