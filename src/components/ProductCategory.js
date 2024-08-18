import Button from "./Button";

const ProductCategory = ({
  categories,
  selectedCategory,
  onSelectedCategory,
}) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => onSelectedCategory(null)}
        className={`px-3 py-1 rounded hover:shadow-lg ${
          selectedCategory === null ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectedCategory(category)}
          className={`px-3 py-1 rounded hover:shadow-lg ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductCategory;
