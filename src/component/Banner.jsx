import banner from '../assets/banner.png';

import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-24 py-22">

      {/* Left Side */}
      <div className="flex-1">

        <p className="bg-purple-100 text-purple-600 rounded-full px-3 py-1 text-xs inline-block mb-4">
          🟣 New: AI-Powered Tools Available
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Supercharge Your
          <br />
          Digital Workflow
        </h1>

        <p className="text-sm text-gray-500 mt-3 leading-6">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
          <br />
          Explore Products
        </p>

        <div className="flex gap-3 mt-4">
          <button className="btn btn-sm rounded-full bg-purple-600 text-white">
            Explore Products
          </button>

          <button className="btn btn-sm rounded-full btn-outline border-purple-500 text-purple-600">
            ▶ Watch Demo
          </button>
        </div>

      </div>

     
      <div className="flex-1 flex justify-center">
    	<img
  src={banner}
  alt="AI Technology"
  className=" object-cover "
/>
      </div>

    </div>
  );
};

export default Banner;