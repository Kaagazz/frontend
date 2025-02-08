import React from 'react'

const Signin = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign In</h2>
        <form className="mt-6">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? 
          <a href="#" className="text-blue-500 hover:underline"> Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Signin
