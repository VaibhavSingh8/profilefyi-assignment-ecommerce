import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Assignment - Profile.fyi",
  description: "Assignment for Frontend Dev role at Profile.fyi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 3000,
              },
              className:
                "text-base max-w-lg py-4 px-6 bg-gray-50 text-gray-700",
            }}
          />
          <main>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
