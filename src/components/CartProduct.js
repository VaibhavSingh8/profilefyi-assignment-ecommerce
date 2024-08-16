"use client";

import Image from "next/image";
import Button from "./Button";
import { useCart } from "@/context/CartContext";
import QuantityCounter from "./QuantityCounter";

const CartProduct = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex gap-4 items-center p-4 border-b border-gray-200 rounded-lg">
      <div className="flex flex-grow items-center">
        <div className="p-2">
          <Image
            src={item.image}
            alt={item.title}
            width={80}
            height={60} // Adjusted to match the aspect ratio
            objectFit="cover"
          />
        </div>
        <div className="flex-grow ml-4">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-700 font-bold text-base">
            ₹ {(item.price * 80 * item.quantity).toFixed(2)}
          </p>
          <p className="text-gray-600">Quantity: {item.quantity}</p>
        </div>
      </div>
      <div>
        <QuantityCounter product={item} />
        {/* <div className="flex gap-2 items-center">
          <Button
            className="w-8 h-8 p-0 text-xs bg-white hover:bg-orange-500 text-black border border-black rounded-full flex items-center justify-center"
            onClick={handleDecreaseQty}
          >
            -
          </Button>
          <span className="text-md font-semibold px-2">{item.quantity}</span>
          <Button
            className="w-8 h-8 p-0 text-xs bg-black text-white border border-black rounded-full flex items-center justify-center"
            onClick={handleIncreaseQty}
          >
            +
          </Button>
        </div> */}
        <Button
          className="flex-1 bg-orange-400 hover:bg-red-600 text-white py-2 px-4 rounded mt-4"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
