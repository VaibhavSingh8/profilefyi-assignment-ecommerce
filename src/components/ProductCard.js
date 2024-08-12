import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
