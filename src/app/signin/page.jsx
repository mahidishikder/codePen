import React from 'react';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Sign In</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 bg-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 bg-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-3 text-gray-500 text-sm">or continue with</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full transition">
            <FaGoogle />
          </button>
          <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full transition">
            <FaFacebookF />
          </button>
          <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full transition">
            <FaTwitter />
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-gray-800 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
