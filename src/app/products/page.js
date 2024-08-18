"use client";

import ProductCard from "@/components/ProductCard";
import ProductCategory from "@/components/ProductCategory";
import Spinner from "@/components/Spinner";
import { useProductsAndCategories } from "@/hooks/useProductsAndCategories";
import { useState } from "react";

export default function Page() {
  const { products, categories, error, isLoading } = useProductsAndCategories(); // using custom hook for data fetching
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-28">
        <Spinner />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <main className="container mx-auto px-6 py-8 pt-24 min-w-full bg-gradient-to-b from-gray-100 to-white">
        <h1 className="text-3xl font-bold my-2 py-4 ">Our Products</h1>
        <ProductCategory
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectedCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
          {filteredProducts.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
}
