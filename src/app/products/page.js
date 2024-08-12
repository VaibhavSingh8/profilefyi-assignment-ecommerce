import ProductCard from "@/components/ProductCard";

async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function Page() {
  const data = await getAllProducts();

  return (
    <>
      <main className="">
        {data.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </main>
    </>
  );
}
