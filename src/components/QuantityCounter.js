import { useCart } from "@/context/CartContext";
import Button from "./Button";

const QuantityCounter = ({ product, className }) => {
  const { updateCartQuantity, removeFromCart } = useCart();

  if (!product) {
    return null;
  }

  const handleIncreaseQty = () => {
    updateCartQuantity(product.id, (product.quantity || 0) + 1); // Increase quantity by 1
  };

  const handleDecreaseQty = () => {
    if (product.quantity > 1) {
      updateCartQuantity(product.id, product.quantity - 1); // Decrease quantity by 1
    } else {
      removeFromCart(product.id); // Remove product if quantity is 1
    }
  };
  return (
    <div
      className={`flex gap-2 mx-auto items-center justify-center ${className}`}
    >
      <Button
        className="w-6 h-8 text-xs bg-white hover:bg-orange-400 text-black border border-black rounded-full flex items-center justify-center"
        onClick={handleDecreaseQty}
      >
        -
      </Button>
      <span className="text-md font-semibold px-2 text-black">
        {product.quantity || 0}
      </span>
      <Button
        className="w-6 h-8 p-0 text-xs bg-black text-white border border-black rounded-full flex items-center justify-center"
        onClick={handleIncreaseQty}
      >
        +
      </Button>
    </div>
  );
};

export default QuantityCounter;
