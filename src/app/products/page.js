"use client";

import ProductCard from "@/components/ProductCard";
import Spinner from "@/components/Spinner";
import { useProducts } from "@/hooks/useProducts";

export default function Page() {
  const { data, error, isLoading } = useProducts(); // using custom hook for data fetching

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-28">
        <Spinner />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <main className="container mx-auto px-4 py-8 pt-24 bg-gray-100 min-w-full">
        <h1 className="text-3xl font-bold my-2 py-4">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
}
