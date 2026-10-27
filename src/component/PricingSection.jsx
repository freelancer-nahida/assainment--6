import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-white py-16 px-5">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-500 text-sm mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">

        {/* Starter */}
        <div className="bg-gray-50 border rounded-xl p-5 flex flex-col">
          <h3 className="text-lg font-bold">Starter</h3>
          <p className="text-gray-500 text-sm mt-1">
            Perfect for getting started
          </p>

          <p className="mt-5">
            <span className="text-3xl font-bold">$0</span>
            <span className="text-gray-500">/Month</span>
          </p>

          <ul className="text-sm text-gray-500 space-y-2 mt-5 flex-1">
            <li><span className="text-green-500">✓</span> Access to 10 free tools</li>
            <li><span className="text-green-500">✓</span> Basic templates</li>
            <li><span className="text-green-500">✓</span> Community support</li>
            <li><span className="text-green-500">✓</span> 1 project per month</li>
          </ul>

          <button className="btn btn-sm rounded-full bg-purple-600 text-white border-0 mt-5">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl p-5 flex flex-col">

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-100 text-orange-600 rounded-full px-3 py-1 text-xs">
            Most Popular
          </span>

          <h3 className="text-lg font-bold">Pro</h3>
          <p className="text-purple-100 text-sm mt-1">
            Best for professionals
          </p>

          <p className="mt-5">
            <span className="text-3xl font-bold">$29</span>
            <span className="text-purple-100">/Month</span>
          </p>

          <ul className="text-sm space-y-2 mt-5 flex-1">
            <li>✓ Access to all premium tools</li>
            <li>✓ Unlimited templates</li>
            <li>✓ Priority support</li>
            <li>✓ Unlimited projects</li>
            <li>✓ Cloud sync</li>
            <li>✓ Advanced analytics</li>
          </ul>

          <button className="btn btn-sm rounded-full bg-white text-purple-600 border-0 mt-5">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-50 border rounded-xl p-5 flex flex-col">
          <h3 className="text-lg font-bold">Enterprise</h3>
          <p className="text-gray-500 text-sm mt-1">
            For teams and businesses
          </p>

          <p className="mt-5">
            <span className="text-3xl font-bold">$99</span>
            <span className="text-gray-500">/Month</span>
          </p>

          <ul className="text-sm text-gray-500 space-y-2 mt-5 flex-1">
            <li><span className="text-green-500">✓</span> Everything in Pro</li>
            <li><span className="text-green-500">✓</span> Team collaboration</li>
            <li><span className="text-green-500">✓</span> Custom integrations</li>
            <li><span className="text-green-500">✓</span> Dedicated support</li>
            <li><span className="text-green-500">✓</span> SLA guarantee</li>
            <li><span className="text-green-500">✓</span> Custom branding</li>
          </ul>

          <button className="btn btn-sm rounded-full bg-purple-600 text-white border-0 mt-5">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingSection;