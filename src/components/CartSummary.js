import Button from "./Button";

const CartSummary = ({ cart }) => {
  // total price calculation based on quantity
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;
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
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>₹ {(total * 80).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
