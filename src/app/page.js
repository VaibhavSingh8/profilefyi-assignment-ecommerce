import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f0f0]">
      <div className="container mx-auto px-4 py-8 text-center bg-white rounded-md">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Our Product Store
        </h1>
        <p className="text-xl mb-8">
          Discover our amazing collection of products, from cutting-edge
          electronics to everyday essentials.
        </p>
        <Link
          href="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Our Products
        </Link>
      </div>
    </div>
  );
}
