import { useCart } from "@/context/CartContext";
import Button from "./Button";
import { useState } from "react";
import toast from "react-hot-toast";

const CartSummary = () => {
  const { applyDiscount, removeDiscount, cart, discount } = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [errorDiscount, setErrorDiscount] = useState("");

  // total price calculation based on quantity
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax

  // Discount functionlaity
  let discountAmount = 0;

  if (discount.type === "fixed") {
    discountAmount = discount.value;
  } else if (discount.type === "percentage") {
    discountAmount = subtotal * (discount.value / 100);
  }

  // using some mock discount codes to imitate a discount feature
  const handleApplyDiscount = () => {
    if (discountCode === "FIXED10") {
      applyDiscount("fixed", 10);
      setErrorDiscount("");
    } else if (discountCode === "PERCENT20") {
      applyDiscount("percentage", 20);
      setErrorDiscount("");
    } else {
      setErrorDiscount("Invalid discount code");
    }

    setDiscountCode("");
  };

  const total = subtotal + tax - discountAmount;

  const handleCheckout = () => {
    if (cart.length > 0) {
      toast.success("Check-out Successfull");
    } else {
      toast.error("Atleast 1 item required to proceed");
    }
  };
  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
      <h2 className="border-b border-gray-200 text-gray-700 font-semibold text-xl mb-4 pb-2">
        PRICE DETAILS
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Price ({cart.length} items)</span>
          <span>₹ {(subtotal * 80).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span>₹ {(tax * 80).toFixed(2)}</span>
        </div>
        {discount.type && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>- ₹ {(discountAmount * 80).toFixed(2)}</span>
          </div>
        )}
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>₹ {(total * 80).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Enter discount code"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errorDiscount && (
          <p className="text-red-500 text-sm mt-1">{errorDiscount}</p>
        )}
        <div className="flex gap-2 mt-4">
          <Button
            onClick={handleApplyDiscount}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Apply
          </Button>
          <Button
            onClick={removeDiscount}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Clear
          </Button>
        </div>
      </div>
      <Button
        className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
