"use client";

import CartProduct from "@/components/CartProduct";
import CartSummary from "@/components/CartSummary";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cart } = useCart();
  return (
    <div className="container mx-auto px-16 pt-24 py-8 mt-8 min-h-screen min-w-full bg-gradient-to-b from-gray-100 to-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden">
          {cart.length > 0 ? (
            cart.map((item) => <CartProduct item={item} key={item.id} />)
          ) : (
            <p className="p-8 text-center text-gray-500 mt-16">
              Your cart is empty. Start shopping to add items to your cart!
            </p>
          )}
        </div>
        <div className="md:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
