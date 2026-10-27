
import { toast } from "react-toastify";

const PremiumCard = ({ premium, carts, setCarts }) => {
  const handleBuy = () => {
    const isFound = carts.find(
      (item) => item.id === premium.id
    );

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setCarts([...carts, premium]);
    toast.success("Item added to cart!");
  };

  const badgeColor = {
    "Best Seller": "bg-amber-100 text-amber-700",
    Popular: "bg-indigo-100 text-indigo-600",
    New: "bg-green-100 text-green-700",
  };

  return (
    <div className="relative flex flex-col border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition">

      {/* Badge */}
      <span
        className={`absolute top-3 right-3 rounded-full px-3 py-2 text-sm ${
          badgeColor[premium.badge] || "bg-gray-100 text-gray-700"
        }`}
      >
        {premium.badge}
      </span>

      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 border border-gray-100 rounded-full text-3xl">
        {premium.icon}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mt-5">
        {premium.title}
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-4 min-h-12">
        {premium.description}
      </p>

      {/* Price */}
      <div className="mt-4 mb-4">
        <span className="text-2xl font-bold">
          ${premium.price}
        </span>
        <span className="text-gray-500">
          /{premium.billing_cycle}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-5">
        {premium.features.map((feature, index) => (
          <li key={index} className="flex gap-2 text-gray-500">
            <span className="text-green-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <button
        onClick={handleBuy}
        className="btn w-full mt-auto rounded-full border-0 text-white bg-gradient-to-r from-purple-600 to-fuchsia-600"
      >
        Buy Now
      </button>

    </div>
  );
};

export default PremiumCard;
