import Link from "next/link";

// const FeatureCard = ({ icon, title, description }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md text-center">
//     <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 p-2 text-blue-600">
//       {icon}
//     </div>
//     <h3 className="font-semibold text-lg mb-2">{title}</h3>
//     <p className="text-sm text-gray-600">{description}</p>
//   </div>
// );

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
//             Welcome to Our <span className="text-blue-600">Product Store</span>
//           </h1>
//           <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
//             Discover our amazing collection of products, from cutting-edge
//             electronics to everyday essentials.
//           </p>
//           <a
//             href="/products"
//             className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
//           >
//             View Our Products
//           </a>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           <FeatureCard
//             icon={
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//                 />
//               </svg>
//             }
//             title="Wide Selection"
//             description="Browse through our extensive catalog of high-quality products."
//           />
//           <FeatureCard
//             icon={
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13 10V3L4 14h7v7l9-11h-7z"
//                 />
//               </svg>
//             }
//             title="Fast Shipping"
//             description="Get your orders delivered quickly with our efficient shipping."
//           />
//           <FeatureCard
//             icon={
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//             }
//             title="Easy Returns"
//             description="Hassle-free returns if you're not completely satisfied."
//           />
//         </div>

//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-4 text-gray-900">
//             Ready to start shopping?
//           </h2>
//           <a
//             href="#"
//             className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold text-lg"
//           >
//             Create an Account
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 p-2 text-blue-600">
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
            Welcome to Our <span className="text-blue-600">Product Store</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Discover our amazing collection of products, from cutting-edge
            electronics to everyday essentials.
          </p>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
          >
            View Our Products
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            }
            title="Wide Selection"
            description="Browse through our extensive catalog of high-quality products."
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            title="Fast Shipping"
            description="Get your orders delivered quickly with our efficient shipping."
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
            title="Easy Returns"
            description="Hassle-free returns if you're not completely satisfied."
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to start shopping?
          </h2>
          <Link
            href="#"
            className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold text-lg"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
