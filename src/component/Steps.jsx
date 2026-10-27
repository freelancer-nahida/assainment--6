import React from "react";

const Steps = () => {
return (
<div className="bg-gray-50 py-16 px-5">


  {/* Heading */}
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-900">
      Get Started In 3 Steps
    </h2>

    <p className="text-gray-500 text-sm mt-3">
      Start using premium digital tools in minutes, not hours.
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">

    {/* Card 1 */}
    <div className="relative bg-white border rounded-xl p-8 text-center">
      <span className="absolute top-3 right-3 bg-purple-600 text-white rounded-full w-7 h-7 text-xs flex items-center justify-center">
        01
      </span>

      <div className="text-5xl mb-4">👤</div>

      <h3 className="font-bold text-lg">
        Create Account
      </h3>

      <p className="text-gray-500 text-sm mt-3">
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>

    {/* Card 2 */}
    <div className="relative bg-white border rounded-xl p-8 text-center">
      <span className="absolute top-3 right-3 bg-purple-600 text-white rounded-full w-7 h-7 text-xs flex items-center justify-center">
        02
      </span>

      <div className="text-5xl mb-4">📦</div>

      <h3 className="font-bold text-lg">
        Choose Products
      </h3>

      <p className="text-gray-500 text-sm mt-3">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>

    {/* Card 3 */}
    <div className="relative bg-white border rounded-xl p-8 text-center">
      <span className="absolute top-3 right-3 bg-purple-600 text-white rounded-full w-7 h-7 text-xs flex items-center justify-center">
        03
      </span>

      <div className="text-5xl mb-4">🚀</div>

      <h3 className="font-bold text-lg">
        Start Creating
      </h3>

      <p className="text-gray-500 text-sm mt-3">
        Download and start using your premium tools immediately.
      </p>
    </div>

  </div>
</div>


);
};

export default Steps;

