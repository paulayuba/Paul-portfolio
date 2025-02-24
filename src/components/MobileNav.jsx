"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/mobileNav/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" }
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Menu Button */}
      <SheetTrigger className="flex items-center justify-center md:hidden">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* Mobile Menu */}
      <SheetContent className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center p-6 md:hidden">
        {/* Logo */}
        <div className="mb-6 text-xl font-bold text-white">Logo</div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 text-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`text-lg font-medium transition-colors ${
                pathname === link.path ? "text-accent" : "text-white hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
