"use client";

import Image from "next/image";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ product, className }) => {
  const { addToCart, cart } = useCart(); // wrapper on useContext from Cart Context for data sharing and cart functionality

  const cartItem = cart.find((item) => item.id === product.id); // Check the product in the cart to determine its quantity
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div
      className={`border rounded-lg overflow-hidden shadow-lg mx-2 flex flex-col h-full bg-white my-4
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${className}`}
    >
      <div className="h-full overflow-hidden flex justify-center items-center border-2 border-x-cyan-800">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={150}
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h2 className=" mb-2 line-clamp-1">{product.title}</h2>
        <p className="text-gray-700 mb-4 font-bold text-base line-clamp-3">
          ₹ {(product.price * 80).toFixed(2)}
        </p>
        {cartItem ? (
          <QuantityCounter product={cartItem} className="-mt-2 w-1/2" />
        ) : (
          <Button
            className="cursor-pointer text-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 mb-1" size={20} />
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
