"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import NavLink from "./NavLink";

import logo from "../../public/logo.svg";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center fixed w-full py-[35px] px-[101px] text-sm text-white">
      <Link href="#hero">
        <Image src={logo} alt="Logo" width={61} height={34} priority />
      </Link>
      <nav>
        <ul className="flex gap-14">
          <li>
            <NavLink href="#about" currentPath={pathname}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="#services" currentPath={pathname}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink href="#career" currentPath={pathname}>
              Career
            </NavLink>
          </li>

          <li>
            <NavLink href="#gallery" currentPath={pathname}>
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink href="#contacts" currentPath={pathname}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
