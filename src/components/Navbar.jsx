"use client";

import Link from "next/link";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link href={link.path} key={link.path} className="capitalize">
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
