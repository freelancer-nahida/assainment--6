
import { toast } from "react-toastify";

const Card = ({ carts, setCard }) => {
  const totalPrice = carts.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleDelete = (item) => {
    const updatedCarts = carts.filter(
      (cartItem) => cartItem.id !== item.id
    );

    setCard(updatedCarts);
    toast.success("Item removed from cart!");
  };

  const handlePayment = () => {
    if (carts.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setCard([]);
    toast.success("Checkout successful!");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">

      <h2 className="text-3xl font-bold text-center mb-8">
        Your Cart
      </h2>

      {carts.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <div className="space-y-4">
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 border rounded-xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500">
                    ${item.price}/{item.billing_cycle}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(item)}
                className="btn btn-error btn-outline rounded-full"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center bg-gray-900 text-white p-5 rounded-xl mt-8">
        <span className="text-xl font-bold">Total</span>

        <span className="text-2xl font-bold">
          ${totalPrice}
        </span>
      </div>

      <button
        onClick={handlePayment}
        disabled={carts.length === 0}
        className="btn w-full mt-5 rounded-full bg-purple-600 text-white"
      >
        Proceed to Checkout
      </button>

    </div>
  );
};

export default Card;
