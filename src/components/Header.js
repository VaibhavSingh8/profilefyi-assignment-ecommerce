"use client";

import { useCart } from "@/context/CartContext";
import { Home, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { cart } = useCart();
  const cartCount = cart?.length || 0;
  const NAV_LINKS = [
    { href: "/products", key: "home", label: <Home size={24} /> },
    { href: "#", key: "search", label: <Search size={24} /> },
    {
      href: "/cart",
      key: "cart",
      label: (
        <div className="relative flex items-center">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      ),
    },
    { href: "#", key: "user", label: <User size={24} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={64} height={29} />
          </Link>
          <div className="flex space-x-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
