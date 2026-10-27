import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 py-10 px-5">

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between text-center gap-8">

        {/* Active Users */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white">
            50K+
          </h2>
          <p className="text-purple-200 mt-3">
            Active Users
          </p>
        </div>

        {/* Line */}
        <div className="hidden md:block w-px h-12 bg-purple-300"></div>

        {/* Premium Tools */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white">
            200+
          </h2>
          <p className="text-purple-200 mt-3">
            Premium Tools
          </p>
        </div>

        {/* Line */}
        <div className="hidden md:block w-px h-12 bg-purple-300"></div>

        {/* Rating */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white">
            4.9
          </h2>
          <p className="text-purple-200 mt-3">
            Rating
          </p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;