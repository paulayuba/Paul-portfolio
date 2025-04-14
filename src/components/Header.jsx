"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 mt-10">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`capitalize ${
            pathname === link.path ? "text-accent border-b-2 border-accent" : ""
          }capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        
        </Link>
      ))}
    </nav>
  );
};

const Header = () => {
  return (
    <header className="py-8 xl:-mt-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold mt-10 mx-20">
            Paul<span className="text-green-500 text-4xl">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar/>
          
          <Link href="/contact">
        
          </Link>
        </div>

        <div className="xl:hidden">
        {/* <MobileNav /> */}
        </div> 
      </div>
    </header>
  );
};

export default Header;
