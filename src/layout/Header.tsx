"use client";

import { usePathname } from "next/navigation";

import NavLink from "./NavLink";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header>
      <nav>
        <ul>
          <NavLink href="#about" currentPath={pathname}>
            About
          </NavLink>
          <NavLink href="#services" currentPath={pathname}>
            Services
          </NavLink>
          <NavLink href="#career" currentPath={pathname}>
            Career
          </NavLink>
          <NavLink href="#gallery" currentPath={pathname}>
            Gallery
          </NavLink>
          <NavLink href="#contacts" currentPath={pathname}>
            Contacts
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
