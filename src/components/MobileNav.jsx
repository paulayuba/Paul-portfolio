"use client"

// import {} from "@/components/mobileNav/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "servise",
        path: "/servise"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <sheet>
      <sheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
      </sheetTrigger>
      <sheetCcontent className="flex flex-col">
        {/*logo */}
        <div>logo</div>
        </sheetCcontent>
    </sheet>
  );
};

export default MobileNav
