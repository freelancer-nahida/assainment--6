

import { use, useState } from "react";
import PremiumCard from "./PremiumCard";
import Cart from "./Cart";

const Premium = ({ premiumPromise }) => {
  const premiums = use(premiumPromise);

  const [activeTab, setActiveTab] = useState("premium");
  const [carts, setCarts] = useState([]);

  return (
    <div>
      {/* Heading */}
      <div className="text-center py-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital
          products designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Products and Cart Buttons */}
      <div className="flex justify-center mb-8">
        <div className="tabs tabs-box bg-white rounded-full p-1">
          <button
            className={`tab rounded-full px-6 ${
              activeTab === "premium"
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md"
                : ""
            }`}
            onClick={() => setActiveTab("premium")}
          >
            Products
          </button>

          <button
            className={`tab rounded-full px-6 ${
              activeTab === "cart"
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md"
                : ""
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {/* Product Cards */}
      {activeTab === "premium" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-5 pb-10">
          {premiums.map((premium) => (
            <PremiumCard
              key={premium.id}
              premium={premium}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      )}

      {/* Cart Section */}
      {activeTab === "cart" && (
        <Card carts={carts} setCard={setCarts} />
      )}
    </div>
  );
};

export default Premium;
