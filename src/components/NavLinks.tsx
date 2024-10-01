"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const navLinks = [
    {num:'00',label: "Home", href: "/" },
    {num:'01', label: "DESTINATION", href: "/destination" },
    {num:'02', label: "CREW", href: "/crew" },
    {num:'03', label: "TECHNOLOGY", href: "/technology" },
  ];

  const pathname = usePathname()

  return (
    <nav className="">
      <ul className="flex flex-col md:flex-row gap-12 ">
        {navLinks.map((navLink) => (
          <Link
            href={navLink.href}
            key={navLink.label}
            className="flex justify-between group md:flex-col"
          >
            <li className={`text-white flex gap-1 uppercase text-[1rem]`}>
              <span className="font-bold">{navLink.num}</span>
              {navLink.label}
            </li>

            <span
              className={`hidden md:block ${
                pathname === navLink.href &&
                "self-end h-[0.188rem] bg-white w-full  "
              }`}
            ></span>

            {pathname !== navLink.href && (
              <span
                className={`hidden md:block opacity-0 group-hover:opacity-100 
                     self-end h-[0.188rem] bg-white/50 transition-all ease-in-out duration-300 w-full`}
              ></span>
            )}

            <span
              className={`md:hidden ${
                pathname === navLink.href && "min-h-full bg-white w-[0.188rem]  "
              }`}
            ></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
