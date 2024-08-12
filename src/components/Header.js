import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const NAV_LINKS = [
    { href: "/", key: "home", label: "Home" },
    { href: "/cart", key: "cart", label: "Cart" },
  ];
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5 bg-gray-500 min-w-full">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={64} height={29} />
      </Link>
      <ul className="h-full gap-12 flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex lg:items-center lg:justify-center"></div>
    </nav>
  );
};

export default Header;
