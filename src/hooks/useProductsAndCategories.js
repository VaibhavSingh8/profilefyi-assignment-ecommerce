"use client";

import { useState, useEffect } from "react";

// to fetch all products
export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

// fetch all categories of products
export async function getAllCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

// Combined Custom hook for fetching products data and categories

export function useProductsAndCategories() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getAllCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { products, categories, error, isLoading };
}
